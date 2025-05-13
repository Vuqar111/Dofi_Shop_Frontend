import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSelector: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const pathParts = location.pathname.split('/');

    // Replace the first segment (language)
    pathParts[1] = lang;

    // Navigate to the new path
    navigate(pathParts.join('/'));
  };

  const currentLang = location.pathname.split('/')[1] || 'en';

  return (
    <select
      className='cursor-pointer outline-none'
      onChange={handleChange}
      defaultValue={currentLang}
    >
      <option value="en">ENG</option>
      <option value="az">AZE</option>
      <option value="fr">FR</option>
      <option value="tr">TR</option>
      <option value="cn">CN</option>
      <option value="de">DE</option>
      <option value="es">ES</option>
      <option value="it">IT</option>
    </select>
  );
};

export default LanguageSelector;
