import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { profileDetails } from '../redux/features/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';


export const Header = ({ setIsOpened }: { setIsOpened: (isOpen: boolean) => void }) => {
  const dispatch: AppDispatch = useDispatch();
  const { profile } = useSelector((state: any) => state.profile);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartProducts = useSelector((state: any) => state.cart?.items);


  useEffect(() => {
    dispatch(profileDetails());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    return (
    <React.Fragment>
      <div className="sticky top-0 z-50 bg-white w-[100%] ">
        <div className='md:w-[80%] mx-auto flex justify-between items-center p-2 md:p-4'>
          <button onClick={toggleMenu} className="md:hidden rounded text-2xl cursor-pointer relative w-12 h-12 flex items-center justify-center">
            <svg
              className="w-8 h-8 transition-transform duration-300 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                x1="3"
                y1="7"
                x2="21"
                y2="7"
                className={`transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={`transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <line
                x1="3"
                y1="17"
                x2="21"
                y2="17"
                className={`transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </svg>
          </button>

          {/* Center: Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
            <h3 className='text-4xl font-extrabold text-green-400'>Dofi</h3>
          </Link>

          {/* Right: Cart Icon */}
          <div className='flex gap-2'>
          <div>
            <LanguageSelector/>
          </div>
            <Link to="/shop">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </Link>
            <button onClick={() => setIsOpened(true)} className="relative text-2xl cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>

              {/* Product Count Badge */}
              {cartProducts.length > 0 && (
                <span className="absolute top-[-10px] right-[-5px] bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartProducts.length}
                </span>
              )}
            </button>

            {profile ? (
              <Link to="/profile" className="text-2xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            ) : (
              <Link to="/profile" className="text-2xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
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
              <h3 className='text-4xl font-extrabold text-green-400'>Dofi</h3>
              <button onClick={toggleMenu} className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FB2C36" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
            <ul className='flex flex-col items-start gap-4 p-4'>
              <li className='grid grid-cols-2 gap-4  w-[100%] text-center pb-4'>
                <div>
                  <Link to="/shop">
                    <div className='flex items-center justify-center'>
                      <img src="https://cdn.shopify.com/s/files/1/0825/1893/3812/files/menu_mini.png?v=1718185082" alt='' />
                    </div>
                    <p className='pt-2 opacity-[0.8]'>Bags for robot</p>
                  </Link>
                </div>

                <div>
                  <Link to="/shop">
                    <div className='flex items-center justify-center'>
                      <img src="https://cdn.shopify.com/s/files/1/0825/1893/3812/files/menu_miko3.png?v=1718185082" alt='' />
                    </div>
                    <p className='pt-2 opacity-[0.8]'>Bags for girls</p>
                  </Link>
                </div>
              </li>
              <li className="text-[16px] hover:text-green-400 w-[100%]">
                {profile ? (
                  <Link className='bg-green-400 text-white px-3 py-2 rounded-[5px]' to="/profile" onClick={toggleMenu}>{profile.fullName?.slice(0, 5)}</Link>
                ) : (
                  <div className='w-[100%]'>
                    <div className='w-[100%] text-center text-green-400 border border-green-400 px-2 py-2 rounded-[5px]'>
                      <Link to="/auth/login" onClick={toggleMenu}>Login</Link>
                    </div>
                    <div className='w-[100%] text-center text-white border border-green-400 bg-green-400 px-2 py-2 rounded-[5px] mt-2'>
                      <Link to="/auth/register" onClick={toggleMenu}>Sign up</Link>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Header;
