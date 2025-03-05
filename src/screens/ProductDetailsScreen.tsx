import { useState, useEffect } from "react"
import Header from "../components/Profile/Header"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { productDetails } from "../redux/features/productSlice"
import swal from 'sweetalert'
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { addToCart } from "../redux/features/cartSlice";

const ProductDetailsScreen = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [selectedColor, setSelectedColor] = useState('text-green-500')
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedQty, setSelectedQty] = useState(1);

  const dispatch: AppDispatch = useDispatch()
  const { product, productError, productLoading } = useSelector((state: any) => state.products)

  const slug = window.location.pathname.split('/')[2]
  useEffect(() => {
    dispatch(productDetails({ slug }))
  }, [dispatch, slug])

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0])
    }
  }, [product])

  const imageGallery = [
    "https://miko.ai/cdn/shop/files/Copy_of_Miko_3-product-1.webp?v=1735102234&width=713",
    "https://miko.ai/cdn/shop/files/Copy_of_M3-red-Back.webp?v=1735102234&width=713",
    "https://miko.ai/cdn/shop/files/Copy_of_M3-red-side_direct.webp?v=1735102234&width=713",
    "https://miko.ai/cdn/shop/files/M3_Lyf-4.webp?v=1735102234&width=713",
    "https://miko.ai/cdn/shop/files/M3_Lyf-3.webp?v=1735102235&width=713",
    "https://miko.ai/cdn/shop/files/Copy_of_M3-blue-side_direct.webp?v=1735102235&width=713",
  ]

  const increaseQty = () => {
    setSelectedQty(prevQty => prevQty + 1);
  };

  const decreaseQty = () => {
    if (selectedQty > 1) {
      setSelectedQty(prevQty => prevQty - 1);
    }
  };
  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.salePrice,
      quantity: selectedQty,
      color: selectedColor,
    };

    dispatch(addToCart(cartItem)); // Use Redux action

    swal("Success!", "Product added to cart", "success");
  };

  return (
    <>
      <Header />
      <div className="w-[80%] mx-auto flex flex-col md:flex-row p-8">
        <div className="w-full md:w-1/2">
          <img src={selectedImage || imageGallery[0]} alt={product?.name} className="w-full h-auto" />
          <div className="flex mt-4 space-x-4">
            {imageGallery?.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className={`w-20 h-20 object-cover cursor-pointer ${selectedImage === image ? 'border-2 border-gray-500' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-extrabold mb-4 pt-4 text-gray-700">{product?.name}</h1>
          <p className="text-2xl text-black mb-4">${product?.salePrice} USD</p>
          <p className="text-sm text-gray-500 mb-4">Shipping calculated at checkout</p>
          <ul>
            <li className="flex items-center gap-4 mb-2">
              <span>
                <img className="w-[30px] h-[30px]" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/features_aiHumanTouch.svg?v=1727181505" />
              </span>
              <span className="text-gray-500">
                AI-powered robot with a human-like touch.
              </span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span>
                <img className="w-[30px] h-[30px]" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/features_parentalControl.svg?v=1727181505" />
              </span>
              <span className="text-gray-500">
                Enhanced encryption ensures safety, Parental control.
              </span>
            </li>

            <li className="flex items-center gap-4 mb-2">
              <span>
                <img className="w-[30px] h-[30px]" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/interactive2.svg?v=1729790397" />
              </span>
              <span className="text-gray-500">
                Interactive robot that teaches and listens.
              </span>
            </li>

            <li className="flex items-center gap-4 mb-2">
              <span>
                <img className="w-[30px] h-[30px]" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/features_steam.svg?v=1727181634" />
              </span>
              <span className="text-gray-500">
                Engages with STEAM-focused learning.
              </span>
            </li>


            <li className="flex items-center gap-4 mb-2">
              <span>
                <img className="w-[30px] h-[30px]" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/features_games.svg?v=1727181634" />
              </span>
              <span className="text-gray-500">
                Loaded with learning apps and games.
              </span>
            </li>

            <li className="flex items-center gap-4 mb-2">
              <span>
                <img className="w-[30px] h-[30px]" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/miko_max2.svg?v=1729790395" />
              </span>
              <span className="text-gray-500">
                Award-winning content on Miko Max.
              </span>
            </li>
          </ul>


          <div className="mb-4">
            <label className="mb-4">Color</label>
            <div className="w-full flex gap-4 mt-4">
              {["text-green-500", "text-blue-500", "text-orange-500", "text-red-500", "text-gray-500"].map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`cursor-pointer w-[50px] h-[50px] rounded-full bg-${color?.replace("text-", "")} border border-gray-300  p-3 text-center ${color} ${selectedColor === color ? "ring-4 ring-gray-400" : ""
                    }`}
                >
                </div>
              ))}
            </div>

          </div>
          <label className="mt-8">Quantity</label>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="col-span-2 flex items-center justify-between border border-gray-200">
              <button
                className="px-2 cursor-pointer"
                onClick={decreaseQty}
                disabled={selectedQty <= 1}
              >
                -
              </button>
              <span className="px-2">{selectedQty}</span>
              <button
                className="px-2 cursor-pointer"
                onClick={increaseQty}
              >
                +
              </button>
            </div>
            <div
              onClick={handleAddToCart}

              className="w-[100%] col-span-3 cursor-pointer border-solid border-[1px] border-green-400 text-center  bg-white text-green-400 py-2 px-4 rounded"
            >
              Add to cart
            </div>
          </div>


          <Link to="/checkout">
            <div
              className="w-[100%] cursor-pointer text-center mt-6 bg-green-400 text-white py-2 px-4 rounded hover:bg-green-400"
            >
              Buy it now
            </div>
          </Link>

        </div>
      </div>
      <div className="w-[80%] mx-auto my-8 p-8">
        <h2 className="text-2xl font-semibold text-gray-600">Ətraflı məlumat</h2>
        <p className="text-sm mt-2">
          {/* Write description of the robot*/}
          A smart and interactive kids' robot designed for ages 1-10, featuring voice commands, educational games, and fun storytelling. It helps children learn, play, and engage safely with parent monitoring and face recognition for security. 😊🤖
          <br /> <br />

          With built-in AI, it can answer questions, teach new skills, and adapt to a child’s interests. For safety, it includes parent monitoring features and face recognition to ensure secure interactions.
          <br /> <br />
          This smart robot makes learning exciting while providing a safe and engaging experience for kids. 😊🤖

        </p>
      </div>
      <div className="my-6">
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default ProductDetailsScreen