import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import esMX from './es-MX.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      'es-MX': { translation: esMX }
    },
    ns: ['translation'],
    defaultNS: 'translation',
    lng: 'es-MX',
    fallbackLng: 'es-MX',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
