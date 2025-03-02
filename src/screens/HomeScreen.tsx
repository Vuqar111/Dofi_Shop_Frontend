import { useState } from 'react'
import Header from '../components/Header'
import HeroScreen from '../components/HeroScreen'
import ProductsScreen from './ProductsScreen'
import CartModal from '../components/CartModal'
import Footer from '../components/Footer'
import Safety from '../components/Safety'
import ProductAdvertising from '../components/ProductAdvertising'
import FAQ from "../components/FAQ"


const HomeScreen = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className='relative'>
      <div>
        <Header setIsOpened={setIsOpened} />
        <HeroScreen />
        <div className='w-[100%] mx-auto'>
          <h3 className='px-4 text-2xl sm:text-5xl md:text-6xl  text-center font-extrabold opacity-[0.8] my-8'>Doofy's Innovative Offerings</h3>
          <ProductsScreen />
        </div>
        <ProductAdvertising />
        <Safety />
        <FAQ/>
        <Footer />
      </div>
      {isOpened && <CartModal setIsOpened={setIsOpened} />}
    </div>
  )
}

export default HomeScreen