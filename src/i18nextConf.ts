import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './assets/locales/en.json';
import translationES from './assets/locales/es.json';

const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },

};
const fallbackLng = ['es'];
const availableLanguages = ['es', 'en'];

// @ts-ignore
i18n
// eslint-disable-next-line max-len
  .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;
