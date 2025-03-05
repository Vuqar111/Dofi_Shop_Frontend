import { orderCreate } from "../redux/features/orderSlice"
import { checkDiscount } from "../redux/features/discountSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { AppDispatch } from '../redux/store'
import Header from '../components/Profile/Header'
import ActionButton from "../partials/ActionButton"
import swal from 'sweetalert'


const CheckOutScreen = () => {
    const dispatch: AppDispatch = useDispatch()
    const { createOrderSuccess, createOrderLoading, createOrderError } = useSelector((state: any) => state.orders)

    const [payment_status, setPaymentStatus] = useState("Paid");
    const [payment_type, setPaymentType] = useState("Cart");
    const [discount, setDiscount] = useState("");
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Azərbaycan');
    const [city, setCity] = useState('');
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [apartment, setApartmant] = useState('')
    const [postal_code, setPostalCode] = useState('')
    const products = JSON.parse(localStorage.getItem('cart') || '[]')




    const [discountCode, setDiscountCode] = useState("");
    const [code, setCode] = useState("");
    const [value, setValue] = useState(0);
    const [dloading, setDLoading] = useState(false);
    const [dsuccessMessage, setDSuccessMessage] = useState("");
    const [derrorMessage, setDErrorMessage] = useState("");



    const [prefix, setPrefix] = useState("050");
    const [digits, setDigits] = useState("");
    const [phone, setPhone] = useState("");

    const handleDigitsChange = (e: any) => {
        const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
        if (value.length <= 7) {
            setDigits(value);
            setPhone(prefix + value); // Concatenate prefix and number
        }
    };

    const handlePrefixChange = (e: any) => {
        setPrefix(e.target.value);
        setPhone(e.target.value + digits);
    };


    const { discount: discountData, loading: discountLoading, error: discountError } = useSelector((state: any) => state.discounts)

    const handleCheckDiscount = async (e: React.FormEvent) => {
        e.preventDefault();
        setDLoading(true);
        setDErrorMessage("");
        setDSuccessMessage("");
        try {
            const response = await dispatch(checkDiscount({ code: discountCode }));
            if (!discountError && response?.payload) {
                setCode(response.payload.code);
                setValue(response.payload.value);
                setDiscount(code);
                setDSuccessMessage("Promokod tətbiq edildi! 🎉");
            } else {
                setDErrorMessage("Yanlış promokod!")
            }
        } catch (error) {
            setDErrorMessage("An error occured. Please try again")
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
                    qty: product.quantity,
                    price: product.salePrice,
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
                    first_name,
                    last_name,
                    address,
                    apartment,
                    phone,
                    postal_code
                }
            }
            await dispatch(orderCreate({ createdOrder }))
        } catch (error) {
            swal('Error!', 'Wrong email or password', 'error')
            console.error(error)
        }
    }




    const subtotal = products.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
    const shippingCost = 10
    const discountAmount = (subtotal * value) / 100;
    const total = subtotal + shippingCost - discountAmount

    return (
        <>
            <Header />
            <div className='flex md:flex-row flex-col-reverse flex-col w-[100%] p-4 md:p-0 md:w-[80%] mx-auto mt-4'>
                <div className='w-3/3 md:w-2/3 p-2 md:p-8'>
                    <form onSubmit={handleOrder}>
                        <h2 className="text-2xl font-bold mb-4">Əlaqə</h2>
                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                E-poçt
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-poçtunuzu yazın"
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mb-4">Çatdırılma</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <div className=" md:mb-4">
                                <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                    Ad
                                </label>
                                <input
                                    type="text"
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Adınızı yazın"
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>


                            <div className="mb-4">
                                <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                    Soyad
                                </label>
                                <input
                                    type="text"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Soyadınızı yazın"
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1  md:gap-4'>


                            <div className="mb-2 md:mb-4">
                                <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                    Şəhər
                                </label>
                                <select
                                    required
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"

                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">Şəhərinizi seçin</option>
                                    <option value="Bakı">Bakı</option>
                                    <option value="Sumqayıt">Sumqayıt</option>
                                    <option value="Gəncə">Gəncə</option>
                                </select>

                            </div>

                        </div>

                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                Ünvan
                            </label>
                            <input
                                type="text"
                                required={true}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Ünvanınızı yazın"
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                Bina
                            </label>
                            <input
                                type="text"
                                value={apartment}
                                onChange={(e) => setApartmant(e.target.value)}
                                placeholder="Binanızı yazın (əgər varsa)"
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                                Əlaqə
                            </label>
                            <div className="flex">
                                <select
                                    value={prefix}
                                    onChange={handlePrefixChange}
                                    className="border border-gray-200 bg-transparent py-3 pl-2 pr-4 outline-none focus:border-primary"
                                >
                                    <option value="050">050</option>
                                    <option value="055">055</option>
                                    <option value="070">070</option>
                                    <option value="077">077</option>
                                </select>
                                <input
                                    type="text"
                                    value={digits}
                                    required
                                    onChange={handleDigitsChange}
                                    placeholder="7 rəqəmli nömrə"
                                    className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                        </div>
                        <ActionButton
                            content="Sifarişi təsdiqlə"
                            success={createOrderSuccess}
                            loading={createOrderLoading}
                            error={createOrderError}
                            path={`/profile/orders`}
                            message="Sifarişiniz təsdiqləndi"
                        />
                    </form>
                </div>
                <div className='w:3/3 md:w-1/3 bg-gray-100 p-4 md:p-6'>
                    <h2 className="text-2xl font-bold mb-4">Sifariş özəti
                    </h2>
                    {products?.length === 0 ? (
                        <p>Sənin kartın boşdur</p>
                    ) : (
                        products?.map((product: any) => (
                            <div key={product.id} className="flex items-center justify-between mb-4">
                                <div className='flex gap-2'>
                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-[10px]" />
                                    <div>
                                        <h3 className="font-semibold">{product.name}</h3>
                                        <p className="text-gray-400 text-sm flex items-center gap-2">Rəng: <div className={`w-[16px] h-[16px] bg-${product?.color?.replace("text-", "")} rounded-full`}></div></p>
                                        <p className="text-gray-400 text-sm flex items-center gap-2">Qiymət: <div>{product?.price} AZN</div></p>
                                    </div>
                                </div>
                                <div>
                                    <p>{product.price * product.quantity} AZN</p>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="mt-4">
                        <form className="w-[100%] grid grid-cols-1 md:grid-cols-4 md:gap-4" onSubmit={handleCheckDiscount}>
                            <div className="w-[100%] col-span-3">
                                <input
                                    type="text"
                                    placeholder="Promokodu daxil edin"
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
                                        "Yoxla"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between mb-2 text-sm">
                            <span className="">Məhsul miqdarı:</span>
                            <span>{subtotal.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                            <span className="">Çatdırılma:</span>
                            <span>{shippingCost.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                            <span className="">Endirim:</span>
                            <span>{discountAmount.toFixed(2)} AZN</span>
                        </div>
                        <div className="flex justify-between mb-2 mt-4">
                            <span className="font-bold">Ümumi miqdar:</span>
                            <span>{total.toFixed(2)} AZN</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutScreen