import React from 'react'
import {Link} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='w-[20%]'>
        <ul className='w-[100%]'>
            <li className='p-2 border border-gray-200 hover:bg-green-400 hover:text-white cursor-pointer'>
                <Link to="/profile">Profile</Link>
            </li>
            <li className='p-2 border border-gray-200 hover:bg-green-400 hover:text-white cursor-pointer'>
                <Link to="/profile/orders">Orders</Link>
            </li>
            <li className='p-2 border border-gray-200 hover:bg-green-400 hover:text-white cursor-pointer'>
                <Link to="/profile/security">Security</Link>
            </li>
            <li className='p-2 border border-gray-200 hover:bg-green-400 hover:text-white cursor-pointer'>
                <Link to="/logout">Log out</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar