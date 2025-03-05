import Header from '../components/Profile/Header'
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store';
import { isTokenExpired } from "../utils/tokenValidity"
import { removeFromCart, updateQuantity } from '../redux/features/cartSlice'

const CartScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate()

  const subtotal = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
  const discount = 0
  const shippingCost = 10
  const total = subtotal + shippingCost - discount

  const handleRemove = (product: any) => {
    dispatch(removeFromCart({ id: product.id, color: product?.color }));

  }

  const handleQuantityChange = (product: any, quantity: number) => {
    dispatch(updateQuantity({ id: product.id, color: product?.color, quantity }))

  }

  const handleCheckout = () => {
    const token = localStorage.getItem("token")
    const tokenExpired = isTokenExpired()

    if (!token || tokenExpired) {
      navigate("/auth/login?checkout")
    } else {
      navigate("/checkout")
    }
  }

  return (
    <>
      <Header />

      <div className='w-[100%] md:w-[80%] mx-auto p-4 md:p-8 mb-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold my-6'>Sənin səbətin</h1>
          <Link to="/shop" className='opacity-[0.8] underline'>
            Alış-verişə davam et
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className='text-center mt-8'>
            <p className='text-lg'>Səbətiniz boşdur.</p>
            <Link to="/shop" className='mt-4 inline-block bg-green-400 text-white px-4 py-2 rounded'>
              Alış-verişə davam et
            </Link>
          </div>
        ) : (
          <>
            <div className='grid-cols-5 gap-4 md:grid hidden'>
              <div className='col-span-3 opacity-[0.7] text-[12px]'>MƏHSUL</div>
              <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>MİQDAR</div>
              <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>ÜMUMİ</div>
            </div>

            <div className='grid grid-cols-3 gap-4 md:hidden'>
              <div className='col-span-2 opacity-[0.7] text-[12px]'>MƏHSUL</div>
              <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>ÜMUMİ</div>
            </div>

            <div className="md:block hidden">
              {cart.map((product: any) => (
                <div key={product._id}>
                  <div className='grid grid-cols-5 items-center mt-4'>
                    <div className='col-span-3 flex gap-2'>
                      <div className='border p-2 border-gray-200 flex items-center justify-center'>
                        <img src="https://strgimgr.umico.az/sized/280/924395-149dddc4a23ff41e4d2c834b88b9568f.jpg" alt={product.name} className="w-16 h-16 object-cover" />
                      </div>

                      <div className='pl-2'>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">Rəng: <div className={`w-[16px] h-[16px] bg-${product?.color?.replace("text-", "")} rounded-full`}></div></p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">Qiymət: <div className='font-bold'>{product?.price} AZN</div></p>
                      </div>
                    </div>

                    <div className='col-span-1 flex justify-end items-center gap-4'>
                      <span className="w-full max-w-[150px] hidden md:flex items-center justify-between border border-gray-200 mt-2 p-2">
                        <button
                          className="px-2 cursor-pointer"
                          onClick={() => handleQuantityChange(product, product.quantity - 1)}
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                          className="px-2 cursor-pointer"
                          onClick={() => handleQuantityChange(product, product.quantity + 1)}
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

                    <div className="font-semibold text-right">{product.quantity * product.price} AZN</div>
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
                        <p className="text-gray-400 text-sm flex items-center gap-2">Rəng: <div className='w-[16px] h-[16px] bg-green-500 rounded-full'></div></p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">Qiymət: <div className='font-bold'>{product?.price} AZN</div></p>
                        <div className='col-span-1 flex justify-end items-center gap-4 mt-2'>
                          <span className="w-full max-w-[150px] flex items-center justify-between border border-gray-200 p-2">
                            <button
                              className="px-2 cursor-pointer"
                              onClick={() => handleQuantityChange(product, product.quantity - 1)}
                              disabled={product.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-2">{product.quantity}</span>
                            <button
                              className="px-2 cursor-pointer"
                              onClick={() => handleQuantityChange(product, product.quantity + 1)}
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
                    <div className="font-semibold text-right">{product.quantity * product.price} AZN</div>
                  </div>
                </div>
              ))}
            </div>

            <div className='border border-b border-gray-100 mt-5'></div>
            <div className='mt-8 flex flex-col justify-end items-end'>
              <div className='bg-gray-100 w-[100%] md:w-[30%] p-4'>
                <h2 className="text-xl font-semibold mb-4">Sifariş özəti</h2>
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
                    <span>{discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2 mt-4">
                    <span className="font-bold">Ümumi miqdar:</span>
                    <span>{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className='w-[100%] bg-green-400 text-white text-center mx-auto py-2 cursor-pointer mt-4' onClick={handleCheckout}>
                  Ödəməyə keç
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