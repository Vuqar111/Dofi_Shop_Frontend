import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = ({ product }: { product: any }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (productId: string) => {
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: any) => item._id === productId);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Set temporary "Done" state
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-white">
      <Link to={`/products/${product?._id}`}>
        <div className="bg-gray-200 py-24 flex items-center justify-center rounded-md">
          <img 
            className="w-32 h-32 object-contain" 
            src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/ministore_mini_2.png?v=1732308855" 
            alt={product?.name} 
          />
        </div>
      </Link>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{product?.name}</h3>
        <p className="opacity-70 text-sm">
          AI-powered conversational learning robot for kids that is small in size but big on personality.
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-medium">${product?.salePrice}</div>

          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center gap-2 text-green-500 text-center"
              >
                <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                </span>
              </motion.div>
            ) : (
              <motion.button
                key="add"
                className="text-white bg-green-400 px-3 py-2 flex items-center gap-2 cursor-pointer"
                onClick={() => handleAddToCart(product._id)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span>Add to Cart</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
