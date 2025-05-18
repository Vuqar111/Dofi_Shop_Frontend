import { orderCreate } from "../redux/features/orderSlice";
import { checkDiscount } from "../redux/features/discountSlice";
import { useDispatch, useSelector } from 'react-redux';
import { profileDetails } from "../redux/features/profileSlice";
import { useState, useEffect, useMemo } from 'react';
import { AppDispatch } from '../redux/store';
import type { RootState } from '../redux/store'; // Add this import
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Header from '../components/Profile/Header';
import ActionButton from "../partials/ActionButton";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { countryList } from "../utils/countryList";

// TypeScript interfaces
interface FormData {
    fullName: string;
    email: string;
    country: string;
    city: string;
    address: string;
    apartment: string;
    postalCode: string;
    phoneNumber: string;
    paymentMethod: 'Cart' | 'PayOnDelivery';
    paymentStatus: 'Paid' | 'Pending';
}

interface FormErrors {
    fullName?: string;
    email?: string;
    country?: string;
    city?: string;
    address?: string;
    phoneNumber?: string;
    postalCode?: string;
}

interface DiscountMessage {
    success: string;
    error: string;
}

interface Product {
    _id?: string;
    id?: string;
    name: string;
    price: number;
    qty: number;
    image: string;
    color?: string;
    code?: string;
}

// Form validation helpers
const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone: any) => {
    return phone && phone.length >= 6;
};

const validateRequiredField = (field: any) => {
    return field && field.trim() !== '';
};

const CheckOutScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const currentLang = location.pathname.split('/')[1] || 'en';

    const dispatch = useDispatch<AppDispatch>();
    const { profile, loading: profileLoading } = useSelector((state: RootState) => state.profile);
    const { createOrderSuccess, createOrderLoading, createOrderError } = useSelector((state: RootState) => state.orders);
    const { discount: discountData, loading: disscountLoading } = useSelector((state: RootState) => state.discounts);

    // Form state
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        country: '',
        city: '',
        address: '',
        apartment: '',
        postalCode: '',
        phoneNumber: '',
        paymentMethod: 'Cart',
        paymentStatus: 'Paid'
    });

    // Form validation state
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Discount state
    const [discountCode, setDiscountCode] = useState("");
    const [discountMessage, setDiscountMessage] = useState<DiscountMessage>({ success: "", error: "" });
    const [discountLoading, setDiscountLoading] = useState(false);

    // Cart data from localStorage - use useMemo to prevent unnecessary re-renders
    const products = useMemo<Product[]>(() => {
        try {
            return JSON.parse(localStorage.getItem('doofycart') || '[]');
        } catch (error) {
            console.error("Error parsing cart data:", error);
            return [];
        }
    }, []);

    // Load user profile
    useEffect(() => {
        dispatch(profileDetails());
    }, [dispatch]);

    // Set form data from profile when available
    useEffect(() => {
        if (profile) {
            setFormData(prev => ({
                ...prev,
                fullName: profile.fullName || '',
                email: profile.email || '',
            }));
        }
    }, [profile]);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Mark field as touched
        setTouched({
            ...touched,
            [name]: true
        });
    };

    // Handle phone input changes (separate because of the component used)
    const handlePhoneChange = (value: string) => {
        setFormData({
            ...formData,
            phoneNumber: value
        });

        setTouched({
            ...touched,
            phoneNumber: true
        });
    };

    // Payment method selection
    const handlePaymentMethodChange = (method: 'Cart' | 'PayOnDelivery') => {
        setFormData({
            ...formData,
            paymentMethod: method,
            paymentStatus: method === 'PayOnDelivery' ? 'Pending' : 'Paid'
        });
    };

    // Validate form on submit
    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!validateRequiredField(formData.fullName)) errors.fullName = t('validation_required');
        if (!validateEmail(formData.email)) errors.email = t('validation_invalid_email');
        if (!validateRequiredField(formData.country)) errors.country = t('validation_required');
        if (!validateRequiredField(formData.city)) errors.city = t('validation_required');
        if (!validateRequiredField(formData.address)) errors.address = t('validation_required');
        if (!validatePhone(formData.phoneNumber)) errors.phoneNumber = t('validation_invalid_phone');

        setFormErrors(errors);
        setTouched({
            fullName: true,
            email: true,
            country: true,
            city: true,
            address: true,
            phoneNumber: true,
            postalCode: true,
            apartment: true
        });

        return Object.keys(errors).length === 0;
    };

    // Handle discount code check
    const handleCheckDiscount = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!discountCode.trim()) return;

        setDiscountLoading(true);
        setDiscountMessage({ success: "", error: "" });

        try {
            const response = await dispatch(checkDiscount({ code: discountCode }));
            const payload = response?.payload;

            if (payload?.code) {
                setDiscountMessage({
                    success: payload.message || t('discount_applied'),
                    error: ""
                });
            } else {
                setDiscountMessage({
                    success: "",
                    error: payload?.message || t('invalid_discount')
                });
            }
        } catch (error) {
            setDiscountMessage({
                success: "",
                error: t('error_occurred')
            });
            console.error("Discount error:", error);
        } finally {
            setDiscountLoading(false);
        }
    };

    // Handle order submission
    const handleOrder = async (e: React.FormEvent) => {
        e.preventDefault();

        // If cart is empty, don't proceed
        if (products.length === 0) {
            swal(t('cart_empty_title'), t('cart_empty_message'), 'warning');
            return;
        }

        // Validate form
        if (!validateForm()) {
            return;
        }

        try {
            const orderData = {
                customerId: formData.email,
                status: "Created",
                products: products.map((product) => ({
                    productId: product?._id,
                    image: product?.image,
                    name: product?.name,
                    qty: product.qty,
                    price: product.price,
                    code: product.code,
                    color: product?.color
                })),
                payment: {
                    payment_status: formData.paymentStatus,
                    payment_type: formData.paymentMethod
                },
                discount: discountData?.code,
                email: formData.email,
                delivery: {
                    email: formData.email,
                    country: formData.country,
                    city: formData.city,
                    full_name: formData.fullName,
                    address: formData.address,
                    apartment: formData.apartment,
                    phone: formData.phoneNumber,
                    postal_code: formData.postalCode
                }
            };

            await dispatch(orderCreate({ createdOrder: orderData }));

            // If order was created successfully, clear cart
            if (createOrderSuccess) {
                localStorage.removeItem('doofycart');
            }
        } catch (error) {
            swal(t('modal_error_message_title'), t('modal_error_message_description'), 'error');
            console.error("Order creation error:", error);
        }
    };

    // Get available cities for selected country
    const availableCities = useMemo(() => {
        const selectedCountry = countryList.find(c => c.name === formData.country);
        return selectedCountry?.cities || [];
    }, [formData.country]);

    // Cart calculations
    const { subtotal, shippingCost, discountAmount, total } = useMemo(() => {
        const subtotal = products.reduce((acc, item) => acc + item.price * item.qty, 0);
        const shippingCost = 10; // Could be calculated based on location, weight, etc.
        const discountValue = discountData?.value || 0;
        const discountAmount = (subtotal * discountValue) / 100;
        return {
            subtotal,
            shippingCost,
            discountAmount,
            total: subtotal + shippingCost - discountAmount
        };
    }, [products, discountData]);

    // Display error message for form fields
    const getErrorMessage = (field: keyof FormErrors) => {
        return touched[field] && formErrors[field] ? (
            <span className="text-red-500 text-xs mt-1">{formErrors[field]}</span>
        ) : null;
    };

    // If no products in cart, redirect to cart page
    useEffect(() => {
        if (products.length === 0 && !createOrderSuccess) {
            swal(t('cart_empty_title'), t('redirecting_to_cart'), 'info')
                .then(() => navigate(`/${currentLang}/cart`));
        }
    }, [products, navigate, currentLang, createOrderSuccess, t]);

    return (
        <>
            <Header />

            <div className="flex md:flex-row flex-col-reverse w-full p-4 md:p-0 md:w-4/5 lg:w-3/4 mx-auto mt-4">
                {/* Checkout form */}
                <div className="w-full md:w-2/3 md:py-8">
                    <form onSubmit={handleOrder}>
                        <h2 className="text-2xl font-bold mb-6">{t('order_checkout_parttitle')}</h2>

                        {/* Contact Information */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">{t('order_checkout_part1')}</h3>

                            <div className="mb-4">
                                <label className="mb-2 block font-medium text-black opacity-60">
                                    {t('order_checkout_part2')}
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder={t('order_checkout_part3')}
                                        className={`w-full rounded-sm placeholder:text-sm border ${touched.email && formErrors.email ? 'border-red-500' : 'border-gray-200'
                                            } bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none`}
                                    />
                                    {getErrorMessage('email')}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="mb-2 block font-medium text-black opacity-60">
                                    {t('order_checkout_part4')}
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder={t('order_checkout_part5')}
                                    className={`w-full rounded-sm placeholder:text-sm border ${touched.fullName && formErrors.fullName ? 'border-red-500' : 'border-gray-200'
                                        } bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none`}
                                />
                                {getErrorMessage('fullName')}
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">{t('order_checkout_part16')}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="mb-2 block font-medium text-black opacity-60">
                                        {t('order_checkout_part6')}
                                    </label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className={`w-full rounded-sm placeholder:text-sm border ${touched.country && formErrors.country ? 'border-red-500' : 'border-gray-200'
                                            } bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none`}
                                    >
                                        <option value="">{t('order_checkout_part17')}</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="USA">USA</option>
                                        <option value="Russia">Russia</option>
                                        <option value="France">France</option>
                                        <option value="Italy">Italy</option>
                                    </select>
                                    {getErrorMessage('country')}
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2 block font-medium text-black opacity-60">
                                        {t('order_checkout_part7')}
                                    </label>
                                    <select
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        disabled={!formData.country}
                                        className={`w-full rounded-sm placeholder:text-sm border ${touched.city && formErrors.city ? 'border-red-500' : 'border-gray-200'
                                            } bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none ${!formData.country ? 'bg-gray-100 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        <option value="">{t('order_checkout_part8')}</option>
                                        {availableCities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                    {getErrorMessage('city')}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="mb-2 block font-medium text-black opacity-60">
                                    {t('order_checkout_part9')}
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder={t('order_checkout_part10')}
                                    className={`w-full rounded-sm placeholder:text-sm border ${touched.address && formErrors.address ? 'border-red-500' : 'border-gray-200'
                                        } bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none`}
                                />
                                {getErrorMessage('address')}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="mb-2 block font-medium text-black opacity-60">
                                        {t('order_checkout_part11')}
                                    </label>
                                    <input
                                        type="text"
                                        name="apartment"
                                        value={formData.apartment}
                                        onChange={handleInputChange}
                                        placeholder={t('order_checkout_part12')}
                                        className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2 block font-medium text-black opacity-60">
                                        {t('order_checkout_part19')}
                                    </label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        placeholder={t('order_checkout_part20')}
                                        className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-3 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2 block font-medium text-black opacity-60">
                                    {t('order_checkout_part13')}
                                </label>
                                <PhoneInput
                                    country={'az'}
                                    value={formData.phoneNumber}
                                    onChange={handlePhoneChange}
                                    enableSearch={true}
                                    inputClass={`!w-full !rounded-sm !border ${touched.phoneNumber && formErrors.phoneNumber ? '!border-red-500' : '!border-gray-200'
                                        } !bg-transparent !py-3 !pl-10 !pr-10 !text-sm !h-[50px]`}
                                    containerClass="!w-full"
                                    buttonClass="!border-none !bg-transparent"
                                    inputStyle={{ width: '100%' }}
                                    placeholder={t('order_checkout_part14')}
                                />
                                {getErrorMessage('phoneNumber')}
                            </div>
                        </div>
                        <ActionButton
                            content={t('order_checkout_part15')}
                            success={createOrderSuccess}
                            loading={createOrderLoading}
                            error={createOrderError}
                            path={`/${currentLang}/profile/orders`}
                            message={t('order_checkout_part18')}
                        />
                    </form>
                </div>

                {/* Order Summary */}
                <div className="w-full md:w-1/3 bg-gray-100 p-4 md:p-6 rounded-lg mb-6 md:mb-0 md:ml-6 self-start sticky top-4">
                    <h2 className="text-2xl font-bold mb-4">{t('order_summary_title')}</h2>

                    {products.length === 0 ? (
                        <p className="text-gray-500">{t('order_summary_part9')}</p>
                    ) : (
                        <div className="max-h-64 overflow-y-auto mb-4 pr-2">
                            {products.map((product) => (
                                <div key={product._id || product.id} className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 last:border-0">
                                    <div className="flex gap-2">
                                        <img src={product.image} alt={product.name} className="w-16 h-20 object-cover rounded-lg" />
                                        <div>
                                            <h3 className="font-semibold">{product.name}</h3>
                                            <p className="text-gray-500 text-sm">{t('product_details_part2')}: {product.qty}</p>
                                            <p className="text-gray-500 text-sm flex items-center gap-2">
                                                {t('order_summary_part1')}:
                                                <div className={`w-4 h-4 bg-${product?.color?.replace("text-", "")} rounded-full`}></div>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-medium">{(product.price * product.qty).toFixed(2)} AZN</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Discount Code */}
                    <div className="mt-4 mb-6">
                        <form className="grid grid-cols-3 gap-2" onSubmit={handleCheckDiscount}>
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    placeholder={t('order_summary_part3')}
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className={`w-full bg-white rounded-sm placeholder:text-sm border ${discountMessage.error ? "border-red-500" : "border-gray-200"
                                        } bg-transparent py-3 pl-3 pr-3 outline-none focus:border-primary focus-visible:shadow-none`}
                                />
                                {discountMessage.error && (
                                    <p className="text-red-500 text-xs mt-1">{discountMessage.error}</p>
                                )}
                                {discountMessage.success && (
                                    <p className="text-green-500 text-xs mt-1">{discountMessage.success}</p>
                                )}
                            </div>

                            <div className="col-span-1">
                                <button
                                    type="submit"
                                    disabled={discountLoading || !discountCode.trim()}
                                    className={`rounded-md w-full py-3 flex items-center justify-center ${discountLoading || !discountCode.trim()
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-green-500 text-white hover:bg-green-600 transition-colors"
                                        }`}
                                >
                                    {discountLoading ? (
                                        <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                                    ) : (
                                        t('order_summary_part4')
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Order Totals */}
                    <div className="mt-6 border-t border-gray-300 pt-4">
                        <div className="flex justify-between mb-2 text-sm">
                            <span className="text-gray-600">{t('order_summary_part5')}:</span>
                            <span>{subtotal.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                            <span className="text-gray-600">{t('order_summary_part6')}:</span>
                            <span>{shippingCost.toFixed(2)} AZN</span>
                        </div>
                        {discountAmount > 0 && (
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="text-gray-600">{t('order_summary_part7')}:</span>
                                <span className="text-green-500">-{discountAmount.toFixed(2)} AZN</span>
                            </div>
                        )}
                        <div className="flex justify-between mt-4 pt-3 border-t border-gray-300">
                            <span className="font-bold text-lg">{t('order_summary_part8')}:</span>
                            <span className="font-bold text-lg">{total.toFixed(2)} AZN</span>
                        </div>
                    </div>

                    {formData.paymentMethod === 'PayOnDelivery' && (
                        <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200 text-sm">
                            <p className="font-medium text-yellow-700">{t('payment_on_delivery_notice')}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CheckOutScreen