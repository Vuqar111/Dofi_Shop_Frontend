import { orderCreate } from "../redux/features/orderSlice"
import { checkDiscount } from "../redux/features/discountSlice";
import { useDispatch, useSelector } from 'react-redux'
import { profileDetails } from "../redux/features/profileSlice";
import { useState, useEffect } from 'react'
import { AppDispatch } from '../redux/store'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Header from '../components/Profile/Header'
import ActionButton from "../partials/ActionButton"
import swal from 'sweetalert'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const CheckOutScreen = () => {

    const location = useLocation();
    const { t } = useTranslation();
    const currentLang = location.pathname.split('/')[1] || 'en';



    const dispatch: AppDispatch = useDispatch()
    const { profile, loading } = useSelector((state: any) => state.profile)


    const { createOrderSuccess, createOrderLoading, createOrderError } = useSelector((state: any) => state.orders)

    const [payment_status, setPaymentStatus] = useState("Paid");
    const [payment_type, setPaymentType] = useState("Cart");
    const [discount, setDiscount] = useState("");
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('')
    const [apartment, setApartmant] = useState('')
    const [postal_code, setPostalCode] = useState('')
    const products = JSON.parse(localStorage.getItem('doofycart') || '[]')


    useEffect(() => {
        dispatch(profileDetails())
    }, [dispatch])


    const [fullName, setFullName] = useState<string | undefined>(profile?.fullName || undefined)
    const [email, setEmail] = useState<string | undefined>(profile?.email || undefined)



    useEffect(() => {
        if (profile) {
            setFullName(profile.fullName || '')
            setEmail(profile.email || '')
        }
    }, [profile])




    const [discountCode, setDiscountCode] = useState("");
    const [code, setCode] = useState("");
    const [value, setValue] = useState(0);
    const [dloading, setDLoading] = useState(false);
    const [dsuccessMessage, setDSuccessMessage] = useState("");
    const [derrorMessage, setDErrorMessage] = useState("");


    const [phoneNumber, setPhoneNumber] = useState('');


  

    const { discount: discountData, loading: discountLoading, error: discountError } = useSelector((state: any) => state.discounts)

    const handleCheckDiscount = async (e: React.FormEvent) => {
    e.preventDefault();
    setDLoading(true);
    setDErrorMessage("");
    setDSuccessMessage("");

    try {
        const response = await dispatch(checkDiscount({ code: discountCode }));
        const payload = response?.payload;

        if (payload?.code && discountCode) {
            setCode(payload.code);
            setValue(payload.value);
            setDiscount(payload.code); 
            setDSuccessMessage(payload.message || "Discount applied!");
        } else {
            setDErrorMessage(payload.message || "Wrong promo code!");
        }
    } catch (error) {
        setDErrorMessage("An error occurred. Please try again.");
        console.error(error);
    } finally {
        setDLoading(false);
    }
};




    const handleOrder = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const createdOrder = {
                customerId: email,
                status: "Created",
                products: products.map((product: any) => ({
                    ...product,
                    productId: product?._id,
                    image: product?.image,
                    qty: product.qty,
                    price: product.price,
                    code: product.code,
                })),
                payment: {
                    payment_status,
                    payment_type
                },
                discount: discountData?.code,
                email,
                delivery: {
                    email,
                    country,
                    city,
                    full_name: fullName,
                    address,
                    apartment,
                    phone: phoneNumber,
                    postal_code
                }
            }
            await dispatch(orderCreate({ createdOrder }))
        } catch (error) {
            swal(t('modal_error_message_title'), t('modal_error_message_description'), 'error')
            console.error(error)
        }
    }




    const subtotal = products.reduce((acc: number, item: any) => acc + item.price * item.qty, 0)
    const shippingCost = 10
    const discountAmount = (subtotal * value) / 100;
    const total = subtotal + shippingCost - discountAmount
    return (
        <>
            <Header />
            {products?.length === 0 ? (
<div className="w-[80%] h-[80vh] flex items-center justify-center mx-auto">
    <Link to={`/${currentLang}/shop`} className="text-white bg-green-400 px-2 py-4">Continue to shopping</Link>
    </div>
            ) : (
<div className='flex md:flex-row flex-col-reverse flex-col w-[100%] p-4 md:p-0 md:w-[80%] mx-auto mt-4'>
                <div className='w-3/3 md:w-2/3 p-2 md:p-8'>
                    <form onSubmit={handleOrder}>
                        <h2 className="text-2xl font-bold mb-4">
                            {t('order_checkout_part1')}
                        </h2>
                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                {t('order_checkout_part2')}
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('order_checkout_part3')}
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>

                            <div className="my-4">
                                <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                    {t('order_checkout_part4')}
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder={t('order_checkout_part5')}
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                        </div>



                        <h2 className="text-xl font-bold my-4">
                            {t('order_checkout_part16')}
                        </h2>


                        <div className='grid grid-cols-1  md:gap-4'>


                            <div className="mb-2">
                                <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                    {t('order_checkout_part6')}
                                </label>
                                <select
                                    required
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"

                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="">
                                        {t('order_checkout_part17')}
                                    </option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="USA">USA</option>
                                    <option value="Russia">Russia</option>
                                    <option value="France">France</option>
                                    <option value="Italy">Italy</option>

                                </select>

                            </div>


                            <div className="mb-2 md:mb-4">
                                <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                    {t('order_checkout_part7')}
                                </label>
                                <select
                                    required
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"

                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">
                                        {t('order_checkout_part8')}
                                    </option>
                                    <option value="Bakı">Bakı</option>
                                    <option value="Sumqayıt">Sumqayıt</option>
                                    <option value="Gəncə">Gəncə</option>
                                </select>

                            </div>

                        </div>

                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                {t('order_checkout_part9')}
                            </label>
                            <input
                                type="text"
                                required={true}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder={t('order_checkout_part10')}
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                {t('order_checkout_part11')}
                            </label>
                            <input
                                type="text"
                                value={apartment}
                                onChange={(e) => setApartmant(e.target.value)}
                                placeholder={t('order_checkout_part12')}
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                {t('order_checkout_part13')}
                            </label>
                            <PhoneInput
                                country={'az'} // default country (Azerbaijan)
                                value={phoneNumber}
                                onChange={(value) => setPhoneNumber(value)}
                                enableSearch={true}
                                inputClass="!w-full !rounded-sm !border !border-gray-200 !bg-transparent !py-3 !pl-10 !pr-10 !text-sm !h-[50px]"
                                containerClass="!w-full"
                                buttonClass="!border-none !bg-transparent"
                                inputStyle={{ width: '100%' }}
                                placeholder={t('order_checkout_part14')}
                            />
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
                <div className='w:3/3 md:w-1/3 bg-gray-100 p-4 md:p-6'>
                    <h2 className="text-2xl font-bold mb-4">
                        {t('order_summary_title')}
                    </h2>
                    {products?.length === 0 ? (
                        <p> {t('order_summary_part9')}</p>
                    ) : (
                        products?.map((product: any) => (
                            <div key={product.id} className="flex items-center justify-between mb-4">
                                <div className='flex gap-2'>
                                    <img src={product.image} alt={product.name} className="w-16 h-20 object-cover rounded-[10px]" />
                                    <div>
                                        <h3 className="font-semibold">{product.name}</h3>
                                        <p className="text-gray-400 text-sm flex items-center gap-2">{t('order_summary_part1')}: <div className={`w-[16px] h-[16px] bg-${product?.color?.replace("text-", "")} rounded-full`}></div></p>
                                    </div>
                                </div>
                                <div>
                                    <p>{product.price * product.qty} AZN</p>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="mt-4">
                        <form className="w-[100%] grid grid-cols-1 md:grid-cols-4 md:gap-4" onSubmit={handleCheckDiscount}>
                            <div className="w-[100%] col-span-3">
                                <input
                                    type="text"
                                    placeholder={t('order_summary_part3')}
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className={`w-[100%] bg-white rounded-sm placeholder:text-sm border ${derrorMessage ? "border-red-500" : "border-gray-200"
                                        } bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none`}
                                />
                                {derrorMessage && <p className="text-red-500 text-sm mt-1">{derrorMessage}</p>}
                                {dsuccessMessage && <p className="text-green-400 text-sm mt-1">{dsuccessMessage}</p>}
                            </div>

                            <div className="w-[100%]  w-full md:col-span-1 md:mt-0 mt-2">
                                <button
                                    type="submit"
                                    disabled={dloading}
                                    className={`rounded-[5px] w-[100%]  py-3 flex items-center justify-center  ${dloading ? "bg-gray-300 text-black" : "bg-green-400 text-white cursor-pointer"}`}
                                >
                                    {dloading ? (
                                        <div className="flex items-center justify-center w-5 h-5 border-2 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
                                    ) : (
                                        t('order_summary_part4')
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between mb-2 text-sm">
                            <span className=""> {t('order_summary_part5')}:</span>
                            <span>{subtotal.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                            <span className=""> {t('order_summary_part6')}:</span>
                            <span>{shippingCost.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                            <span className=""> {t('order_summary_part7')}:</span>
                            <span>{discountAmount.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 mt-4">
                            <span className="font-bold"> {t('order_summary_part8')}:</span>
                            <span>{total.toFixed(2)} AZN</span>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </>
    )
}

export default CheckOutScreen