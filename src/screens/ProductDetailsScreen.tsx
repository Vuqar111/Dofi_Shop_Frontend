import { useState, useEffect } from "react";
import Header from "../components/Profile/Header";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { productDetails } from "../redux/features/productSlice";
import swal from 'sweetalert';
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { addToCart } from "../redux/features/cartSlice";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const ProductDetailsScreen = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  const [selectedColor, setSelectedColor] = useState('#B7CB3F');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch: AppDispatch = useDispatch();
  const { product } = useSelector((state: any) => state.products);

  const slug = window.location.pathname.split('/')[3];
  const isComingSoon = slug === "dofi-bag";

  useEffect(() => {
    dispatch(productDetails({ slug }));
  }, [dispatch, slug]);

  const name = t(`products.${slug}.name`);
  const description = t(`products.${slug}.description`);
  const features = t(`products.${slug}.features`, { returnObjects: true }) as Array<{ name: string; icon: string }>;

  const imageGalleryGreen = [
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318610/Classic_45D_View_wzyd3t.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318600/Classic_Front_View_tsnfi8.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318621/Classic_Back_View_qfdkde.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318790/Classic_Side_View_rg2ny1.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318665/Classic_Down_View_myt95g.png",
  ];

  const imageGalleryPink = [
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751396221/Pink_45D_View_oxdb2w.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751396220/Pink_Front_View_lswv20.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751396220/Pink_Side_View_uosacz.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751396220/Pink_Down_View_ghky5x.png",
    "https://res.cloudinary.com/dslgitrbt/image/upload/v1751396219/Pink_Back_View_ilqawq.png"
  ];

  const activeGallery = selectedColor === '#FB64B6' ? imageGalleryPink : imageGalleryGreen;

  useEffect(() => {
    if (selectedColor === '#FB64B6') {
      setSelectedImage(imageGalleryPink[0]);
    } else {
      setSelectedImage(imageGalleryGreen[0]);
    }
    setSelectedIndex(0);
  }, [selectedColor]);

  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? activeGallery.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(activeGallery[newIndex]);
  };

  const nextImage = () => {
    const newIndex = selectedIndex === activeGallery.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(activeGallery[newIndex]);
  };

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
      image: selectedImage,
      qty: selectedQty,
      color: selectedColor,
    };

    dispatch(addToCart(cartItem));
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

    dispatch(addToCart(cartItem));
    window.location.href = `/${currentLang}/checkout`;
  };

  return (
    <>
      <Header />
      <div className="w-[100%] md:w-[80%] mx-auto flex flex-col md:flex-row p-8">
        <div className="w-full md:w-1/2 relative">
          {isComingSoon ? (
            <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center rounded-md relative">
              <span className="text-2xl font-bold text-gray-600">
                {t('bag_word2')}
              </span>
            </div>
          ) : (
            <>
              <div className="relative">
                <img src={selectedImage} alt={`Product ${selectedIndex}`} className="w-full h-auto" />
                <button
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer"
                  onClick={prevImage}
                >
                  {/* Left Arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer"
                  onClick={nextImage}
                >
                  {/* Right Arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>
              <div className="flex mt-4 space-x-2 justify-center overflow-x-auto max-w-full px-2">
                {activeGallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index}`}
                    className={`w-16 h-16 md:w-20 md:h-20 object-cover cursor-pointer ${selectedIndex === index ? 'border-2 border-gray-500' : ''}`}
                    onClick={() => {
                      setSelectedIndex(index);
                      setSelectedImage(image);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-extrabold mb-4 pt-4 text-gray-700">{name}</h1>
          <div className="mb-4">
            <p className="text-lg text-gray-500 line-through">

              {product?.slug === "dofi-bag" ? '99 AZN' : product?.price}
              {product?.slug === "dofi" ? '299 AZN' : product?.price} 
              {product?.slug === "dofi-pro" ? '399 AZN' : product?.price}
            </p>
            <p className="text-2xl text-green-500 font-bold">{product?.salePrice} AZN</p>
            <span className="bg-yellow-400 text-white text-sm px-2 py-1 rounded">SALE</span>
          </div>
          <ul>
            {features?.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 mb-2">
                <img className="w-[30px] h-[30px]" src={feature.icon} alt="" />
                <span className="text-gray-500">{feature.name}</span>
              </li>
            ))}
          </ul>

          <div className="mb-4">
            <label className="mb-4">{t('product_details_part1')}</label>
            <div className="w-full flex gap-4 mt-4">
              {["#B7CB3F", "#FB64B6"].map((color) => (
                <div
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                  className={`cursor-pointer w-[50px] h-[50px] rounded-full border border-gray-300 p-3 text-center ${selectedColor === color ? "ring-4 ring-gray-400" : ""}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {!isComingSoon && (
            <>
              <label className="mt-8">{t('product_details_part2')}</label>
              <div className="grid grid-cols-5 gap-4 mt-4">
                <div className="col-span-2 flex items-center justify-between border border-gray-200">
                  <button className="px-2 cursor-pointer" onClick={decreaseQty} disabled={selectedQty <= 1}>-</button>
                  <span className="px-2">{selectedQty}</span>
                  <button className="px-2 cursor-pointer" onClick={increaseQty}>+</button>
                </div>
                <div
                  onClick={handleAddToCart}
                  className="w-[100%] col-span-3 cursor-pointer border-solid border-[1px] border-green-400 text-center bg-white text-green-400 py-2 px-4 rounded"
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
            </>
          )}
        </div>
      </div>

      <div className="w-[100%] md:w-[80%] mx-auto my-8 p-8">
        <h2 className="text-2xl font-semibold text-gray-600">
          {t('product_details_part5')}
        </h2>
        <p className="text-sm mt-2">
          {description}
        </p>
      </div>

      <div className="my-6">
        <FAQ />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailsScreen;
