import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: true,
        // add to whitelist whenever new files are added to /public/locales
        whitelist: ["en", "sv"],
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: "public/locales/{{lng}}/{{ns}}.json"
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;
