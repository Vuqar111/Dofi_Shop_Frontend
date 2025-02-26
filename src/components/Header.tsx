import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { profileDetails } from '../redux/features/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';


export const Header = ({ setIsOpened }: { setIsOpened: (isOpen: boolean) => void }) => {
  const dispatch: AppDispatch = useDispatch();
  const { profile } = useSelector((state: any) => state.profile);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(profileDetails());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <div className="w-[100%] md:w-[80%] mx-auto flex justify-between items-center p-4">
        {/* Left: Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Center: Logo */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <h3 className='text-4xl font-extrabold text-green-400'>Doofy</h3>
        </Link>

        {/* Right: Cart Icon */}
        <div className='flex gap-2'>
        <Link to="/shop" className="text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          <button onClick={() => setIsOpened(true)} className="text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>

          {profile ? (
            <Link to="/shop" className="text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          ) : (
            <Link to="/auth/login" className="text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}

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
              <h3 className='text-4xl font-extrabold text-green-400'>Doofy</h3>
              <button onClick={toggleMenu} className="text-2xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <ul className='flex flex-col items-start gap-4 p-4'>
              <li className="text-[16px] hover:text-green-400"><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li className="text-[16px] hover:text-green-400"><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
              <li className="cursor-pointer text-[16px] hover:text-green-400" onClick={() => { setIsOpened(true); toggleMenu(); }}>Cart</li>
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
  );
};

export default Header;
