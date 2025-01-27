import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: require("./public/locales/en/translation.json")
            },
            es: {
                translation: require("./public/locales/es/translation.json")
            }
        }
    })

module.exports = {
    i18n: {
      defaultLocale: 'en', // Idioma por defecto: inglés
      locales: ['en', 'es'], // Lista de idiomas soportados
    },
  };
  