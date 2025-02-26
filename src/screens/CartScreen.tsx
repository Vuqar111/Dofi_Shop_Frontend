import Header from '../components/Profile/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";
const CartScreen = () => {

  const [cart, setCart] = useState<any[]>([])


  const products = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(storedCart)
  }, [])



  const subtotal = products.reduce((acc: number, item: any) => acc + item.salePrice * item.quantity, 0)
  const discount = 0
  const shippingCost = 10 // Example shipping cost
  const total = subtotal + shippingCost - discount


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
    <>
      <Header />

      <div className='w-[100%] md:w-[80%] mx-auto  p-4 md:p-8 mb-8'>
        <h1 className='text-3xl font-bold my-6'>Cart</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

          <div className='col-span-2 shadow'>
            <div className="grid grid-cols-1">
              {cart.map((product: any) => (
                <div key={product._id}>
                  <div className='bg-white flex justify-between  text-left items-center p-2 '>
                    <div className='flex md:items-center'>
                      <div className='border p-2 border-gray-200 flex items-center justify-center'>
                        <img src="https://strgimgr.umico.az/sized/280/924395-149dddc4a23ff41e4d2c834b88b9568f.jpg" alt={product.name} className="w-16 h-16 object-cover" />
                      </div>

                      <div className='pl-2'>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">Color: <div className='w-[16px] h-[16px] bg-green-500 rounded-full'></div></p>
                      </div>
                    </div>

                    <span className="hidden md:flex items-center justify-between border border-gray-200 mt-2 p-2">
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

                    <div className="font-semibold">{product.quantity} X {product.salePrice} AZN</div>




                    <div className='text-right md:pt-1'>
                      <button onClick={() => handleRemove(product._id)}>
                        <FontAwesomeIcon icon={faTrash} className='text-[16px] text-right text-gray-400 hover:text-red-400 cursor-pointer' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-1 bg-gray-100 shadow p-2'>
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span className="">Subtotal:</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="">Shipping:</span>
                <span>€{shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="">Discount:</span>
                <span>-€{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 mt-4">
                <span className="font-bold">Total:</span>
                <span>€{total.toFixed(2)}</span>
              </div>

            </div>
            <div className='w-[100%] bg-green-400 text-white text-center mx-auto py-2 cursor-pointer mt-4'>
              <Link to="/checkout">Go to checkout</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}




export default CartScreen