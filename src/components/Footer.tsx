import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-black text-white px-4 py-8">
            <div className="w-[100%] p-4 md:p-0 md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <Link to="/">
                        <h3 className='text-4xl font-extrabold text-green-400'>Doofy</h3>
                    </Link>                    <div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Products</h3>
                    <ul>
                        <li className='mb-2'><Link to="/product1" className="hover:underline">Robot for boys</Link></li>
                        <li className='mb-2'><Link to="/product2" className="hover:underline">Robot for girls</Link></li>
                        <li className='mb-2'><Link to="/product3" className="hover:underline">Bag for robots</Link></li>
                        <li className='mb-2'><Link to="/product4" className="hover:underline">Robot for daun</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Shipping & Policy</h3>
                    <ul>
                        <li className='mb-2'><Link to="/shipping" className="hover:underline">Shipping Information</Link></li>
                        <li className='mb-2'><Link to="/returns" className="hover:underline">Return Policy</Link></li>
                        <li className='mb-2'><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        <li className='mb-2'><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Social Media Accounts */}
                <div>
                    <h3 className="font-bold mb-4">Follow Us</h3>
                    <p className='mb-2'>1234 Street Name, City, Country</p>
                    <p className='mb-2'>Email: info@osoturkiye.com</p>
                    <p className='mb-2'>Phone: +90 123 456 7890</p>
                    <ul className="flex space-x-4 mt-4">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[80%] mx-auto mt-4 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2025 Doofy. All rights reserved.</p>
      </div>
        </div>
    )
}

export default Footer