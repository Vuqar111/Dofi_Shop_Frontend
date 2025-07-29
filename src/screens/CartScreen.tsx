import Header from '../components/Profile/Header'
import Footer from '../components/Footer'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store';
import { isTokenExpired } from "../utils/tokenValidity"
import { removeFromCart, updateQuantity } from '../redux/features/cartSlice'
import { useTranslation } from 'react-i18next';

const CartScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate()

  const location = useLocation();
  const { t } = useTranslation();

  const currentLang = location.pathname.split('/')[1] || 'az';

  const subtotal = cart.reduce((acc: number, item: any) => acc + item.price * item.qty, 0)
  const discount = 0
  const shippingCost = 10
  const total = subtotal + shippingCost - discount

  const handleRemove = (product: any) => {
    dispatch(removeFromCart({ id: product.id, color: product?.color }));

  }

  const handleQuantityChange = (product: any, qty: number) => {
    dispatch(updateQuantity({ id: product.id, color: product?.color, qty }))

  }

  const handleCheckout = () => {
    const token = localStorage.getItem("token")
    const tokenExpired = isTokenExpired()

    navigate(`/${currentLang}/checkout`)

    // if (!token || tokenExpired) {
    //   navigate(`/${currentLang}/checkout`)
    // } else {
    //   navigate(`/${currentLang}/checkout`)
    // }
  }

  return (
    <>
      <Header />

      <div className='w-[100%] md:w-[80%] mx-auto p-4 md:p-8 mb-8 min-h-[50vh]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold my-6'>
            {t('cart_page_part1')}
          </h1>
          <Link to={`/${currentLang}/shop`} className='opacity-[0.8] underline'>
            {t('cart_page_part2')}
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className='text-center mt-8'>
            <p className='text-lg text-red-400'>
              {t('cart_modal_message2')}
            </p>
          </div>
        ) : (
          <>
            <div className='grid-cols-5 gap-4 md:grid hidden'>
              <div className='col-span-3 opacity-[0.7] text-[12px]'>
                {t('cart_page_part3')}
              </div>
              <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>
                {t('cart_page_part4')}
              </div>
              <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>
                {t('cart_page_part5')}
              </div>
            </div>

            <div className='grid grid-cols-3 gap-4 md:hidden'>
              <div className='col-span-2 opacity-[0.7] text-[12px]'>
                {t('cart_page_part3')}
              </div>
              <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>
                {t('cart_page_part5')}
              </div>
            </div>

            <div className="md:block hidden">
              {cart.map((product: any) => (
                <div key={product._id}>
                  <div className='grid grid-cols-5 items-center mt-4'>
                    <div className='col-span-3 flex gap-2'>
                      <div className='border p-2 border-gray-200 flex items-center justify-center'>
                        <img src={product?.image} alt={product.name} className="w-16 h-16 object-cover" />
                      </div>

                      <div className='pl-2'>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">{t('order_summary_part1')}: <div className={`w-[16px] h-[16px] bg-[${product?.color}] rounded-full`}></div></p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">{t('order_summary_part2')}: <div className='font-bold'>{product?.price} AZN</div></p>
                      </div>
                    </div>

                    <div className='col-span-1 flex justify-end items-center gap-4'>
                      <span className="w-full max-w-[150px] hidden md:flex items-center justify-between border border-gray-200 mt-2 p-2">
                        <button
                          className="px-2 cursor-pointer"
                          onClick={() => handleQuantityChange(product, product.qty - 1)}
                          disabled={product.qty <= 1}
                        >
                          -
                        </button>
                        <span className="px-2">{product.qty}</span>
                        <button
                          className="px-2 cursor-pointer"
                          onClick={() => handleQuantityChange(product, product.qty + 1)}
                        >
                          +
                        </button>
                      </span>
                      <span className='text-right md:pt-1'>
                        <button onClick={() => handleRemove(product)}>
                          <FontAwesomeIcon icon={faTrash} className='text-[16px] text-right text-gray-400 hover:text-red-400 cursor-pointer' />
                        </button>
                      </span>
                    </div>
                    <div className="font-semibold text-right">{product.qty * product.price} AZN</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="block md:hidden">
              {cart.map((product: any) => (
                <div key={product._id}>
                  <div className='grid grid-cols-3 items-center mt-4'>
                    <div className='col-span-2 flex gap-2'>
                      <span className='w-16 h-18 border p-2 border-gray-200 flex items-center justify-center'>
                        <img src="https://strgimgr.umico.az/sized/280/924395-149dddc4a23ff41e4d2c834b88b9568f.jpg" alt={product.name} className="w-16 h-16 object-cover" />
                      </span>

                      <div className='pl-2'>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">{t('order_summary_part1')}: <div className='w-[16px] h-[16px] bg-green-400 rounded-full'></div></p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">{t('order_summary_part2')}: <div className='font-bold'>{product?.price} AZN</div></p>
                        <div className='col-span-1 flex justify-end items-center gap-4 mt-2'>
                          <span className="w-full max-w-[150px] flex items-center justify-between border border-gray-200 p-2">
                            <button
                              className="px-2 cursor-pointer"
                              onClick={() => handleQuantityChange(product, product.qty - 1)}
                              disabled={product.qty <= 1}
                            >
                              -
                            </button>
                            <span className="px-2">{product.qty}</span>
                            <button
                              className="px-2 cursor-pointer"
                              onClick={() => handleQuantityChange(product, product.qty + 1)}
                            >
                              +
                            </button>
                          </span>
                          <span className='text-right md:pt-1'>
                            <button onClick={() => handleRemove(product)}>
                              <FontAwesomeIcon icon={faTrash} className='text-[16px] text-right text-gray-400 hover:text-red-400 cursor-pointer' />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-right">{product.qty * product.price} AZN</div>
                  </div>
                </div>
              ))}
            </div>

            <div className='border border-b border-gray-100 mt-5'></div>
            <div className='mt-8 flex flex-col justify-end items-end'>
              <div className='bg-gray-100 w-[100%] md:w-[30%] p-4'>
                <h2 className="text-xl font-semibold mb-4">
                  {t('order_summary_title')}
                </h2>
                <div className="mt-6">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="">
                      {t('order_summary_part5')}:</span>
                    <span>{subtotal.toFixed(2)} AZN</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="">
                      {t('order_summary_part6')}
                      :</span>
                    <span>{shippingCost.toFixed(2)} AZN</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="">
                      {t('order_summary_part7')}:</span>
                    <span>{discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2 mt-4">
                    <span className="font-bold">
                      {t('order_summary_part8')}:</span>
                    <span>{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className='w-[100%] bg-green-400 text-white text-center mx-auto py-2 cursor-pointer mt-4' onClick={handleCheckout}>
                  {t('cart_page_part6')}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}

export default CartScreen