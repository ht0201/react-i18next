import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      paragraph:
        'react-i18next is a powerful internationalization framework for React / React Native which is based on i18next.',
    },
  },
  sp: {
    translation: {
      paragraph:
        'react-i18next es un poderoso marco de internacionalización para React / React Native que se basa en i18next.',
    },
  },
  hn: {
    translation: {
      paragraph:
        'प्रतिक्रिया-i18next प्रतिक्रिया / प्रतिक्रिया मूल के लिए एक शक्तिशाली अंतर्राष्ट्रीयकरण ढांचा है जो i18next पर आधारित है।',
    },
  },
  fr: {
    translation: {
      paragraph:
        "react-i18next est un puissant framework d'internationalisation pour React / React Native basé sur i18next.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
