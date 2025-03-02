import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroScreen = () => {
    return (
        <div className='relative w-[100%] py-1 md:w-[100%] mx-auto h-[60vh] md:h-[80vh] rounded-[5px] overflow-hidden'>
            {/* Background Video */}
            <video autoPlay muted loop className='w-full h-full object-cover'>
                <source src="https://cdn.shopify.com/videos/c/o/v/b53aad82a4c143d6a02e9a186e65322d.mp4" type="video/mp4" />
            </video>

            {/* Hero Content */}
            <div className='absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%]'>
                {/* Title */}
                <motion.h3
                    className='text-white text-2xl sm:text-5xl md:text-6xl font-extrabold'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Meet Doofy
                </motion.h3>

                {/* Subtitle */}
                <motion.p
                    className='md:block hidden text-white text-sm sm:text-2xl md:text-4xl font-semibold mt-2'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    Smart AI Powered Robots
                </motion.p>

                {/* Button */}
                <motion.div
                    className='mt-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <Link to="/shop">
                        <span className='bg-green-400 text-white py-2 px-8 sm:py-4 sm:px-12 text-xs sm:text-lg rounded-full inline-block'>
                            Indi Sifariş et
                        </span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroScreen;
