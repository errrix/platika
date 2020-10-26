import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from "./translations/en/common.json";
import common_ru from "./translations/ru/common.json";
import common_it from "./translations/it/common.json";
import common_de from "./translations/de/common.json";
import common_fr from "./translations/fr/common.json";

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
      },
      it: {
        common: common_it
      },
      de: {
        common: common_de
      },
      fr: {
        common: common_fr
      }
    },
  });

console.log(i18next);
export default i18next;