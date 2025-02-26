import { useState } from 'react'
import Header from '../components/Header'
import HeroScreen from '../components/HeroScreen'
import ProductsScreen from './ProductsScreen'
import CartModal from '../components/CartModal'
import Footer from '../components/Footer'
import Safety from '../components/Safety'
import ProductAdvertising from '../components/ProductAdvertising'
const HomeScreen = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className='relative'>
      <div>
        <Header setIsOpened={setIsOpened} />
        <HeroScreen />
        <div>
          <h3 className='text-center font-extrabold opacity-[0.8] text-6xl my-8'>Doofy's Innovative Offerings</h3>
          <ProductsScreen />
        </div>
        <ProductAdvertising/>
        <Safety/>
        <Footer />
      </div>
      {isOpened && <CartModal setIsOpened={setIsOpened} />}
    </div>
  )
}

export default HomeScreen