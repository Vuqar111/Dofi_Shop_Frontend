import { Link,useLocation } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { profileDetails } from '../../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import LanguageSelector from '../LanguageSelector';

export const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const { profile } = useSelector((state: any) => state.profile);
  const cartProducts = useSelector((state: any) => state.cart?.items);
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  console.log(currentLang);


  useEffect(() => {
    dispatch(profileDetails());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="sticky top-0 z-50 bg-white w-[100%] ">
      <div className="w-[100%] md:w-[80%] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-8">
          <Link to={`/${currentLang}`}>
            <h3 className='text-4xl font-extrabold text-green-400'>Dofi</h3>
          </Link>
        </div>
        <ul className='flex gap-2'>
          
          <div>
            <LanguageSelector/>
          </div>

          <li className="text-[16px] hover:text-green-400">
            <Link to={`/${currentLang}/shop`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </Link>
          </li>

          <Link to={`/${currentLang}/cart`} className="relative text-2xl cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

            {/* Show badge only if productCount > 0 */}
            {cartProducts.length > 0 && (
              <span className="absolute top-[-10px] right-[-5px] bg-green-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartProducts.length}
              </span>
            )}
          </Link>

          <li className="text-[16px] hover:text-green-400">
            {profile ? (
              <Link to={`/${currentLang}/profile`} className="text-2xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            ) : (
              <Link to={`/${currentLang}/auth/login`} className="text-2xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            )}
          </li>


        </ul>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
