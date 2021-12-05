import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { systemLanguage } from "./language";

const getLanguage = (lng: string) => lng.replace("-", "_");

const resources = {
  en: { translation: require("../languages/en.json") },
  pt_BR: { translation: require("../languages/pt_BR.json") },
  fr: { translation: require("../languages/fr.json") },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage(systemLanguage()),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
