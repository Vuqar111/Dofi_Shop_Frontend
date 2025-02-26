import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const CartModal = ({ setIsOpened }: { setIsOpened: (isOpen: boolean) => void }) => {
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(storedCart)
  }, [])

  const handleRemove = (productId: string) => {
    const updatedCart = cart.filter((item: any) => item._id !== productId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const handleQuantityChange = (productId: string, quantity: number) => {
    const updatedCart = cart.map((item: any) => {
      if (item._id === productId) {
        return { ...item, quantity }
      }
      return item
    })
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
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
            <h2 className="text-xl text-gray-700 font-bold">Your cart</h2>
            <button onClick={() => setIsOpened(false)} className='cursor-pointer'>
              <FontAwesomeIcon icon={faTimes} className='text-3xl text-gray-700' />
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
                      <p className="text-gray-400">GIFT</p>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-2">Color: <div className='w-[16px] h-[16px] bg-green-500 rounded-full'></div></p>
                      <span className="flex items-center justify-between border border-gray-200 mt-2 p-2">
                        <button
                          className="px-2 cursor-pointer"
                          onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                          className="px-2 cursor-pointer"
                          onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">${product.salePrice * product.quantity}</div>
                    <div className='text-right pt-1'>
                      <button onClick={() => handleRemove(product._id)}>
                        <FontAwesomeIcon icon={faTrash} className='text-[16px] text-right text-gray-400 hover:text-red-400 cursor-pointer' />
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
                Go to Products
              </Link>
            ) : (
              <Link to="/checkout" className="w-full bg-green-400 text-white py-2 rounded text-center block">
                Go to Checkout
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CartModal