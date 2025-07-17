import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/images/aboutImage.jpg';

const AboutScreen = () => {
    const [isOpened, setIsOpened] = useState(false)
    const { t } = useTranslation();

    return (
        <>
            <Header setIsOpened={setIsOpened} />
            <div className="w-[90%] md:w-[80%] mx-auto px-4 text-center">
                <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl font-bold">
                    {t('about_page_title')}<br />
                    <span className="text-green-400">
                        {t('about_page_title2')}
                    </span>
                </h1>
                <p className="pt-4 opacity-70 text-sm sm:text-base md:text-lg">
                    {t('about_page_description')}
                </p>
                <div className="flex justify-center my-8 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full max-w-[90%] md:max-w-[80%] mx-auto">
                    <img src={aboutImage} alt="Description" width="300" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <p className="flex justify-center my-8 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full max-w-[90%] md:max-w-[80%] mx-auto opacity-70 text-sm sm:text-base md:text-lg">
                    {t('about_page_info')}
                </p>
            </div>
            <Footer />
        </>
    )
}

export default AboutScreen
