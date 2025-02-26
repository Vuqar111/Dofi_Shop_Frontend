import { Link } from 'react-router-dom'
import React,{useEffect, useState} from "react";
import { profileDetails } from '../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'


export const Header = ({ setIsOpened }: { setIsOpened: (isOpen: boolean) => void }) => {
  const dispatch: AppDispatch = useDispatch()
  const { profile, loading, error } = useSelector((state: any) => state.profile)

  console.log(profile);

  useEffect(() => {
      dispatch(profileDetails())
  }, [dispatch])
  return (
    <React.Fragment>
      <div className="w-[80%] mx-auto flex justify-between items-center p-4">
        <div>
          <ul className='flex gap-2'>
            <li className="text-[16px] hover:text-green-400"><Link to="/about">About</Link></li>
            <li className="text-[16px] hover:text-green-400"><Link to="/about">How It Works</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/">
            <h3 className='text-4xl font-extrabold text-green-400'>Doofy</h3>
          </Link>
        </div>
        <ul className='flex gap-2'>
          <li className="text-[16px] hover:text-green-400"><Link to="/shop">Shop</Link></li>
          <li onClick={() => setIsOpened(true)} className="cursor-pointer text-[16px] hover:text-green-400">Cart</li>
          <li className="text-[16px] hover:text-green-400">
            {profile ? (
              <Link className='bg-green-400 text-white px-3 py-2 rounded-[5px]' to="/profile">{profile.fullName?.slice(0,5)}</Link>
            ) : (
              <Link to="/auth/login">Login</Link>
            )}
            
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header