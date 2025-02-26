import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AboutScreen = () => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <>
            <Header setIsOpened={setIsOpened} />
            <div className="w-[80%] mx-auto">
            <h1 className="text-center mt-8 text-6xl font-bold">
                <span className="text-green-400">Empowering eCommerce</span><br/>
                brands everywhere.
            </h1>
            <p className="text-center pt-4 opacity-[0.7]">Learn more about our story and the hard-working <br/> people behind the pink envelope.</p>
            <div className="flex justify-center my-8 max-h-[600px] max-w-[80%] mx-auto">
          <img
            className="w-full h-auto object-cover"
            src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="teamPhoto"
          />
        </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutScreen