import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';

const AboutScreen = () => {
    const [isOpened, setIsOpened] = useState(false)
      const { t } = useTranslation();

    return (
        <>
            <Header setIsOpened={setIsOpened} />
            <div className="w-[90%] md:w-[80%] mx-auto px-4 text-center">
                <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl font-bold">
                    Hello, World!<br/>
                    <span className="text-green-400">We're Dofi.</span>
                </h1>
                <p className="pt-4 opacity-70 text-sm sm:text-base md:text-lg">
                Behind every great robot is a curious mind and a team of dreamers. Learn how Dofi came to life—and <br className="hidden sm:block"/>the humans who gave it a heart.
                </p>
                <div className="flex justify-center my-8 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full max-w-[90%] md:max-w-[80%] mx-auto">
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="teamPhoto"
                    />
                </div>
                <p className="flex justify-center my-8 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full max-w-[90%] md:max-w-[80%] mx-auto opacity-70 text-sm sm:text-base md:text-lg">
                Dofi began as a spark of curiosity between Vugar and Sanan - a shared dream to build a robot that felt alive. 
                With Leyla crafting its playful personality through UI/UX, Huseyn & Valida shaping its iconic 3D form, and a community of 
                mentors lighting the way, Dofi slowly winked into existence. This robot isn’t just ours; it’s a mosaic of late-night ideas, 
                stubborn problem-solving, and the kind of magic that happens when the right people come together.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default AboutScreen
