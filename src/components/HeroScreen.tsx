import { Link } from "react-router-dom";


const HeroScreen = () => {
    return (
        <div className='relative w-[80%] mx-auto h-[80vh] rounded-[10px] overflow-hidden'>
            <video autoPlay muted loop>
                <source src="https://cdn.shopify.com/videos/c/o/v/b53aad82a4c143d6a02e9a186e65322d.mp4" type="video/mp4" />
            </video>
            <div className='absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-white text-6xl font-extrabold'>Meet Doofy</h3>
                <p className='text-white text-4xl font-semibold'>Smart AI Powered Robots</p>
                <div className='mt-6'>
                    <Link to="/products">
                        <span className=' bg-green-400 text-white py-4 px-12 text:sm rounded-full'>Shop Now</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default HeroScreen

