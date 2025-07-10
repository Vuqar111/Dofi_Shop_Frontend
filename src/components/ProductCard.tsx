import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';



const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'en';



  const [isAdded, setIsAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState<"#B7CB3F" | "#FB64B6">("#B7CB3F");
  const images: Record<"#B7CB3F" | "#FB64B6", string> = {
    "#B7CB3F": "https://res.cloudinary.com/dslgitrbt/image/upload/v1751318610/Classic_45D_View_wzyd3t.png",
    "#FB64B6": "https://res.cloudinary.com/dslgitrbt/image/upload/v1751396221/Pink_45D_View_oxdb2w.png"
  };




  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.salePrice,
      code: product.code,
      qty: 1,
      color: selectedColor,
      image: images[selectedColor]
    };

    dispatch(addToCart(cartItem));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white">
      <Link to={`/${currentLang}/shop/${product?.slug}`}>
        <div className="min-h-[400px] bg-gray-200 py-24 flex items-center justify-center rounded-md relative overflow-hidden">
          {product?.slug === "dofi-bag" ? (
            <>
              <img
                className="w-64 h-64 object-contain blur-3xl opacity-60"
                src={product?.image}
                alt={product?.name}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white bg-green-500 bg-opacity-60 px-4 py-2 rounded">
                  {t('bag_word1')}{' '}
                </span>
              </div>
            </>
          ) : (
            <img
              className="w-64 h-64 object-contain"
              src={product?.image}
              alt={product?.name}
            />
          )}
        </div>
      </Link>

      <div className="mt-3">
        <h3 className="text-lg font-semibold">{product?.name}</h3>
        <p className="flex-1 opacity-70 text-sm h-24 overflow-hidden">
          {t(`products.${product?.slug}.info`)}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-medium">{product?.salePrice} AZN</div>

          {product?.slug === "dofi-bag" ? (
            <div className="text-gray-400 italic text-sm">
              {t('bag_word2')}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center gap-2 text-green-500 text-center px-3 py-1"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                </motion.div>
              ) : (
                <motion.button
                  key="add"
                  className="text-white bg-green-400 px-3 py-2 flex items-center gap-2 cursor-pointer"
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>{t('add_to_cart_text')}</span>
                </motion.button>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
