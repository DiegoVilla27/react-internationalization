import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// LANGUAGES
import EN from "./languages/en.json";
import ES from "./languages/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { ...EN },
    es: { ...ES }
  },
  lng: "en" // Default language
});
