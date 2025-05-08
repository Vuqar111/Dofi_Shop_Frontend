import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { isTokenExpired } from "../utils/tokenValidity"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/features/cartSlice'



const CartModal = ({ setIsOpened }: { setIsOpened: (isOpen: boolean) => void }) => {
  const dispatch: AppDispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate()


  const handleRemoveFromCart = (product: any) => {
    dispatch(removeFromCart({ id: product.id, color: product?.color }));
  };

  const handleQuantityChange = (product: any, qty: number) => {
    dispatch(updateQuantity({ id: product.id, color: product?.color, qty }))
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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex z-50 justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full md:w-1/4 h-full bg-white p-4 flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
            <h2 className="text-xl text-gray-700 font-bold">Cart</h2>
            <button onClick={() => setIsOpened(false)} className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((product: any) => (
                <div key={product._id} className="flex justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex">
                    <div>
                      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
                    </div>
                    <div className='pl-2'>
                      <p className="text-gray-400">Gift</p>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-2">Color: <div className='w-[16px] h-[16px] bg-green-500 rounded-full'></div></p>
                      <div className="flex items-center justify-between border border-gray-200 mt-2 p-2 max-w-[100px]">
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
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{product.price * product.qty} AZN</div>
                    <div className='text-right pt-1'>
                      <button onClick={() => handleRemoveFromCart(product)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FB2C36" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="w-full border-gray-200 border-t pt-4">
            {cart.length === 0 ? (
              <Link to="/shop" className="w-full bg-green-400 text-white py-2 rounded text-center block">
                Continue shopping
              </Link>
            ) : (
              <div onClick={handleCheckout} className="cursor-pointer w-full bg-green-400 text-white py-2 rounded text-center block">
                Proceed to checkout
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CartModal