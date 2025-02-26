import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import { profileDetails } from '../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

export const Header = ({ setIsOpened }: { setIsOpened: (isOpen: boolean) => void }) => {
  const dispatch: AppDispatch = useDispatch()
  const { profile, loading, error } = useSelector((state: any) => state.profile)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    dispatch(profileDetails())
  }, [dispatch])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <React.Fragment>
      <div className="w-[100%] md:w-[100%] mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <h3 className='text-4xl font-extrabold text-green-400'>Doofy</h3>
        </Link>
        <button onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <ul className='hidden md:flex gap-2'>
          <li className="text-[16px] hover:text-green-400"><Link to="/about">About</Link></li>
          <li className="text-[16px] hover:text-green-400"><Link to="/shop">Shop</Link></li>
          <li onClick={() => setIsOpened(true)} className="cursor-pointer text-[16px] hover:text-green-400">Cart</li>
          <li className="text-[16px] hover:text-green-400">
            {profile ? (
              <Link className='bg-green-400 text-white px-3 py-2 rounded-[5px]' to="/profile">{profile.fullName?.slice(0, 5)}</Link>
            ) : (
              <Link to="/auth/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white shadow-lg z-50"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className='text-4xl font-extrabold text-green-400'>Doofy</h3>
              <button onClick={toggleMenu} className="text-2xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <ul className='flex flex-col items-start gap-4 p-4'>
              <li className="text-[16px] hover:text-green-400"><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li className="text-[16px] hover:text-green-400"><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
              <li onClick={() => { setIsOpened(true); toggleMenu() }} className="cursor-pointer text-[16px] hover:text-green-400">Cart</li>
              <li className="text-[16px] hover:text-green-400">
                {profile ? (
                  <Link className='bg-green-400 text-white px-3 py-2 rounded-[5px]' to="/profile" onClick={toggleMenu}>{profile.fullName?.slice(0, 5)}</Link>
                ) : (
                  <Link to="/auth/login" onClick={toggleMenu}>Login</Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  )
}

export default Header