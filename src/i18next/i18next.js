import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/en.json";
import uz from "./lng/uz.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    uz: {
      translation: uz,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
