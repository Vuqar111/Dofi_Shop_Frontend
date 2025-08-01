import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const ProductAdvertising = () => {
  const { t } = useTranslation();

  const featureIcons = [
    "https://static.thenounproject.com/png/2023630-200.png",
    "https://cdn-icons-png.flaticon.com/512/4205/4205637.png", 
    "https://cdn-icons-png.flaticon.com/512/1766/1766429.png", 
    "https://cdn-icons-png.flaticon.com/512/9259/9259956.png"
  ];

  return (
    <motion.div
      className="w-[100%] p-4 md:w-[80%] mx-auto mb-4 flex flex-col md:flex-row gap-4 mt-12 md:mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Product Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          className="w-full h-auto"
          src="https://res.cloudinary.com/dslgitrbt/image/upload/v1751318610/Classic_45D_View_wzyd3t.png"
          alt="productImage"
        />
      </motion.div>

      {/* Product Description */}
      <motion.div
        className="w-full md:w-1/2 mt-4 md:mt-12 md:px-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-500">
          <span className="text-green-400">Dofi</span> {t('about_title')}
        </h3>
        <p className="pt-4 opacity-70 text-sm sm:text-base md:text-lg">
          {t('about_description')}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <img
                className="w-12 h-12"
                src={featureIcons[index]}
                alt={`feature-icon-${index}`}
              />
              <p className="text-lg">
                {t(`about_feature_part${index + 1}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductAdvertising;
