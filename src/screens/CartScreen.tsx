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


        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold my-6'>Your Cart</h1>
          <Link to="/shop" className='opacity-[0.8] underline'>
            Continue shopping
          </Link>
        </div>



        <div className='grid-cols-5 gap-4 md:grid hidden'>
          <div className='col-span-3 opacity-[0.7] text-[12px]'>PRODUCT</div>
          <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>QUANTITY</div>
          <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>TOTAL</div>
        </div>

        <div className='grid grid-cols-3 gap-4 md:hidden'>
          <div className='col-span-2 opacity-[0.7] text-[12px]'>PRODUCT</div>
          <div className='col-span-1 opacity-[0.7] text-right text-[12px]'>TOTAL</div>
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
                    <p className="text-gray-400 text-sm flex items-center gap-2">Color: <div className='w-[16px] h-[16px] bg-green-500 rounded-full'></div></p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">Price: <div className='font-bold'>{product?.salePrice} AZN</div></p>

                  </div>
                </div>

                <div className='col-span-1 flex justify-end items-center gap-4'>
                  <span className="w-full max-w-[150px] hidden md:flex items-center justify-between border border-gray-200 mt-2 p-2">
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
                  <span className='text-right md:pt-1'>
                    <button onClick={() => handleRemove(product._id)}>
                      <FontAwesomeIcon icon={faTrash} className='text-[16px] text-right text-gray-400 hover:text-red-400 cursor-pointer' />
                    </button>
                  </span>
                </div>


                <div className="font-semibold text-right">{product.quantity * product.salePrice} AZN</div>

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
                    <p className="text-gray-400 text-sm flex items-center gap-2">Color: <div className='w-[16px] h-[16px] bg-green-500 rounded-full'></div></p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">Price: <div className='font-bold'>{product?.salePrice} AZN</div></p>
                    <div className='col-span-1 flex justify-end items-center gap-4 mt-2'>
                      <span className="w-full max-w-[150px]  flex items-center justify-between border border-gray-200  p-2">
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
                      <span className='text-right md:pt-1'>
                        <button onClick={() => handleRemove(product._id)}>
                          <FontAwesomeIcon icon={faTrash} className='text-[16px] text-right text-gray-400 hover:text-red-400 cursor-pointer' />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>




                <div className="font-semibold text-right">{product.quantity * product.salePrice} AZN</div>

              </div>
            </div>
          ))}
        </div>

        <div className='border border-b border-gray-100 mt-5'></div>
        <div className='mt-8 flex flex-col justify-end items-end'>
          <div className='bg-gray-100 w-[100%] md:w-[30%] p-4'>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span className="">Subtotal:</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="">Shipping:</span>
                <span>{shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="">Discount:</span>
                <span>{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 mt-4">
                <span className="font-bold">Estimated Total:</span>
                <span>{total.toFixed(2)}</span>
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