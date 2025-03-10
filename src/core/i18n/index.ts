import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn  from '@/core/i18n/locales/en/translation.json';
import translationEs from '@/core/i18n/locales/es/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      es: {
        translation: translationEs,  
      },    
    },
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
