import { Link } from "react-router-dom";

const HeroScreen = () => {
    return (
        <div className='relative w-[100%] px-4 py-2 md:w-[80%] mx-auto h-[40vh] md:h-[80vh] rounded-[5px] overflow-hidden'>
            <video autoPlay muted loop className='w-full h-full object-cover'>
                <source src="https://cdn.shopify.com/videos/c/o/v/b53aad82a4c143d6a02e9a186e65322d.mp4" type="video/mp4" />
            </video>
            <div className='absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-white text-2xl sm:text-5xl md:text-6xl font-extrabold'>Meet Doofy</h3>
                <p className='md:block hidden text-white text-sm sm:text-2xl md:text-4xl font-semibold mt-2'>Smart AI Powered Robots</p>
                <div className='mt-6'>
                    <Link to="/products">
                        <span className='bg-green-400 text-white py-2 px-8 sm:py-4 sm:px-12 text-xs sm:text-lg rounded-full inline-block'>Shop Now</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroScreen;
