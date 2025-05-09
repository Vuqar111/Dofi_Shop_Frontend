// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome_message: "Welcome",
    },
  },
  az: {
    translation: {
      welcome_message: "Xoş gəlmisiniz",
    },
  },
  // Add other languages here...
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
