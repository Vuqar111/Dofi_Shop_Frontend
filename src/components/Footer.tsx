import { Link,useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
        const location = useLocation();

      const currentLang = location.pathname.split('/')[1] || 'az';

    return (
        <div className="bg-black text-white px-4 py-8">
            <div className="w-[100%] p-4 md:p-0 md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <Link to="/">
                        <h3 className='text-4xl font-extrabold text-green-400'>Dofi</h3>
                    </Link>                    <div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mb-4">
                        {t('footer_title1')}
                    </h3>
                    <ul>

                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/shop`} className="hover:underline">
                            {t('footer_part1')}
                        </Link></li>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/shop`} className="hover:underline">
                            {t('footer_part3')}
                        </Link></li>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/shop`} className="hover:underline">
                            {t('footer_part4')}
                        </Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">
                        {t('footer_title2')}
                    </h3>
                    <ul>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/about`} className="hover:underline">{t('footer_part5')}</Link></li>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/app`} className="hover:underline">{t('footer_part13')}</Link></li>
                        {/* <li className='mb-2 text-sm'><Link to={`/${currentLang}/shipping`} className="hover:underline">{t('footer_part6')}</Link></li>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/returns`} className="hover:underline">{t('footer_part7')}</Link></li>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/privacy`} className="hover:underline">{t('footer_part8')}</Link></li>
                        <li className='mb-2 text-sm'><Link to={`/${currentLang}/terms`} className="hover:underline">{t('footer_part9')}</Link></li> */}
                    </ul>
                </div>

                {/* Social Media Accounts */}
                <div>
                    <h3 className="font-bold mb-4">{t('footer_title3')}</h3>
                    <p className='mb-2 text-sm'>{t('footer_part2')} 10Q</p>
                    <p className='mb-2 text-sm'>{t('footer_part10')}: dofi.robot@gmail.com</p>
                    <p className='mb-2 text-sm'>{t('footer_part11')}: +994 50 519 87 54</p>
                    <ul className="flex space-x-4 mt-4">
                        <li>
                            <a href="https://www.tiktok.com/@dofi.kid" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" alt="Tiktok" className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/dofikid/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/dofikid/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@DofiKid" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube.png" alt="Youtube" className="w-8 h-8" />
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="w-[80%] mx-auto mt-4 border-t border-gray-700 pt-4 text-center">
                <p>&copy; 2025 Dofi. {t('footer_part12')}</p>
            </div>
        </div>
    )
}

export default Footer