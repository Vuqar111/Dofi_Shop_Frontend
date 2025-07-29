import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import mainImage3 from '../assets/images/mainThird.jpg';

const HeroScreen = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const currentLang = location.pathname.split('/')[1] || 'az';


    return (
        <div className='relative w-full h-[60vh] md:h-[80vh] overflow-hidden'>

            <img src={mainImage3} alt="mainImage3" className="absolute top-0 left-0 w-full h-full object-cover brightness-50" />

            {/* Hero Content */}
            <div className='w-full absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2'>
                {/* Title */}
                <motion.h3
                    className='text-white text-5xl sm:text-5xl md:text-6xl font-extrabold'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>{t('hero_page_title')}</h1>

                </motion.h3>

                {/* Subtitle */}
                <motion.p
                    className='hidden md:block text-white text-sm sm:text-2xl md:text-4xl font-semibold mt-2'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    {t('hero_page_subtitle')}
                </motion.p>

                {/* Button */}
                <motion.div
                    className='mt-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <Link to={`/${currentLang}/shop`}>
                        <span className='bg-green-400 text-white py-4 px-8 sm:py-4 sm:px-12 text-[16px] sm:text-lg rounded-full inline-block'>
                            {t('hero_page_button')}
                        </span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroScreen;
