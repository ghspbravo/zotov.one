import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'

import ruLocale from './locales/ru.json';
import enLocale from './locales/en.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: ruLocale,
      en: enLocale
    },
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "ru",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
      wait: true,
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18n;