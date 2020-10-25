import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from "./translations/en/common.json";
import common_ru from "./translations/ru/common.json";

i18next.use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: common_en
      },
      ru: {
        common: common_ru
      }
    },
  });

console.log(i18next);
export default i18next;