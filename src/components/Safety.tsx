import React from "react";
import { motion } from "framer-motion";

const Safety = () => {
  return (
    <motion.div
      className="w-[95%] mx-auto bg-[#EDF0FB] my-8 text-center rounded-[15px] p-8 md:p-12 lg:p-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-black font-semibold text-3xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Suni İntellekt və Təhlükəsizlik
      </motion.h2>

      {/* Description */}
      <motion.p
        className="pt-4 text-sm md:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        Biz təhlükəsizliyə ciddi yanaşırıq. Uşağın məlumatlarının hər bir baytı qapalı sistemimiz daxilində qorunur. <br />
        Doofy ailə dostu süni intellekt üçün yeni bir standart müəyyənləşdirir.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 md:my-12">
        {[
          {
            "img": "https://miko.ai/cdn/shop/files/MiniPDP_Features_Parents.svg?v=1727687496&width=150",
            "title": "Valideynlər üçün faydalıdır",
            "description": "Təhlükəsiz zənglərdən real vaxtda irəliləyiş hesabatlarına qədər"
          },
          {
            "img": "https://miko.ai/cdn/shop/files/Mini_PDP_Privacy_Icon_Tools.svg?v=1727687496&width=150",
            "title": "Daha yaxşı valideyn alətləri",
            "description": "Uşağın təhsil planlarını aydın şəkildə təqdim edən və inkişaf mərhələlərini müəyyən edən Valideyn Tətbiqi"
          },
          {
            "img": "https://miko.ai/cdn/shop/files/Mini_PDP_Privacy_Icon_Secure.svg?v=1727687496&width=150",
            "title": "Təhlükəsiz, güvənli və məxfi",
            "description": "kidSAFE+ COPPA sertifikatlı cihaz, fərdiləşdirilə bilən təhlükəsizlik və məxfilik ayarları ilə"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <img className="w-20 md:w-24" src={item.img} alt="" />
            <h3 className="pt-2 font-semibold text-lg md:text-xl">{item.title}</h3>
            <p className="pt-2 text-sm md:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Safety;
