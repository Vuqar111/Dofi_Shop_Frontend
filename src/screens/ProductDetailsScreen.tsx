import { useState, useEffect } from "react"
import Header from "../components/Profile/Header"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { productDetails } from "../redux/features/productSlice"
import swal from 'sweetalert'
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import { addToCart } from "../redux/features/cartSlice";
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const ProductDetailsScreen = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? imageGallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === imageGallery.length - 1 ? 0 : prev + 1));
  };

  const [selectedColor, setSelectedColor] = useState('#B7CB3F')
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedQty, setSelectedQty] = useState(1);

  const dispatch: AppDispatch = useDispatch()
  const { product, productError, productLoading } = useSelector((state: any) => state.products)

  const slug = window.location.pathname.split('/')[3]
  useEffect(() => {
    dispatch(productDetails({ slug }))
  }, [dispatch, slug])

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0])
    }
  }, [product])

  const name = t(`products.${slug}.name`);
  const description = t(`products.${slug}.description`);
  const features = t(`products.${slug}.features`, { returnObjects: true }) as Array<{ name: string; icon: string }>;



  const imageGallery = [
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318610/Classic_45D_View_wzyd3t.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318600/Classic_Front_View_tsnfi8.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318621/Classic_Back_View_qfdkde.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318790/Classic_Side_View_rg2ny1.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318665/Classic_Down_View_myt95g.png",
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
      code: product.code,
      price: product.salePrice,
      image: product.image,
      qty: selectedQty,
      color: selectedColor,
    };

    dispatch(addToCart(cartItem)); // Use Redux action

    swal(t('modal_success_message_title'), t('modal_success_message_description'), "success");
  };



    const handleCheckout = () => {
    if (!product) return;
    const cartItem = {
      id: product.id,
      name: product.name,
      code: product.code,
      price: product.salePrice,
      image: product.image,
      qty: selectedQty,
      color: selectedColor,
    };

    dispatch(addToCart(cartItem)); // Use Redux action

    // Redirect to checkout page
    window.location.href = `/${currentLang}/checkout`;
  };

  return (
    <>
      <Header />
      <div className="w-[100%] md:w-[80%] mx-auto flex flex-col md:flex-row p-8">
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            <img src={imageGallery[selectedIndex]} alt={`Product ${selectedIndex}`} className="w-full h-auto" />
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer"
              onClick={prevImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer"
              onClick={nextImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <div className="flex mt-4 space-x-2 justify-center overflow-x-auto max-w-full px-2">
            {imageGallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className={`w-16 h-16 md:w-20 md:h-20 object-cover cursor-pointer ${selectedIndex === index ? 'border-2 border-gray-500' : ''}`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-extrabold mb-4 pt-4 text-gray-700">{name}</h1>
          <p className="text-2xl text-black mb-4">${product?.salePrice} USD</p>
          <p className="text-sm text-gray-500 mb-4"> {t('product_details_part6')}</p>
          <ul>
            {features?.map((feature: any, index: any) => (
              <li key={index} className="flex items-center gap-4 mb-2">
                <span>
                  <img className="w-[30px] h-[30px]" src={feature.icon} alt="" />
                </span>
                <span className="text-gray-500">
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <label className="mb-4">
              {t('product_details_part1')}
            </label>
            <div className="w-full flex gap-4 mt-4">
              {["#B7CB3F", "#FB64B6"].map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`cursor-pointer w-[50px] h-[50px] rounded-full bg-[${color}] border border-gray-300  p-3 text-center ${color} ${selectedColor === color ? "ring-4 ring-gray-400" : ""
                    }`}
                >
                </div>
              ))}
            </div>

          </div>
          <label className="mt-8">
            {t('product_details_part2')}
          </label>
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
              {t('product_details_part3')}
            </div>
          </div>


          
            <div
            onClick={handleCheckout}
              className="w-[100%] cursor-pointer text-center mt-6 bg-green-400 text-white py-2 px-4 rounded hover:bg-green-400"
            >
              {t('product_details_part4')}
            </div>
          

        </div>
      </div>
      <div className="w-[100%] md:w-[80%] mx-auto my-8 p-8">
        <h2 className="text-2xl font-semibold text-gray-600">
          {t('product_details_part5')}
        </h2>
        <p className="text-sm mt-2">
          {t(`products.${slug}.description`)}
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