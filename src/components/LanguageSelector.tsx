import React from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelector: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    navigate(`/${lang}`);
  };

  return (
    <select 
    className='cursor-pointer outline-none'
    onChange={handleChange} defaultValue="en">
      <option value="en">ENG</option>
      <option value="az">AZE</option>
      <option value="fr">FR</option>
      <option value="de">GE</option>
      <option value="tr">TR</option>
    </select>
  );
};

export default LanguageSelector;
