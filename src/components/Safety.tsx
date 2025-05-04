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
        Artificial Intelligence and Security
      </motion.h2>

      {/* Description */}
      <motion.p
        className="pt-4 text-sm md:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        We take security seriously. Every byte of your child's data is protected within our closed system. <br /> 
        Dofi sets a new standard for family-friendly artificial intelligence.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 md:my-12">
        {[
          {
            "img": "https://miko.ai/cdn/shop/files/MiniPDP_Features_Parents.svg?v=1727687496&width=150",
            "title": "Useful for parents",
            "description": "From secure calls to real-time progress reports"
          },
          {
            "img": "https://miko.ai/cdn/shop/files/Mini_PDP_Privacy_Icon_Tools.svg?v=1727687496&width=150",
            "title": "Better parenting tools",
            "description": "Parent App that clearly presents child's educational plans and identifies developmental milestones"
          },
          {
            "img": "https://miko.ai/cdn/shop/files/Mini_PDP_Privacy_Icon_Secure.svg?v=1727687496&width=150",
            "title": "Safe, secure and private",
            "description": "kidSAFE+ COPPA certified device with customizable security and privacy settings"
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
