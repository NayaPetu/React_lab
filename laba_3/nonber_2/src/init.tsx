import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import ru from './locales/ru';
import intervalPlural from 'i18next-intervalplural-postprocessor';


const init = () => {
  i18n
  .use(intervalPlural)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: { translation: en },
        ru: { translation: ru },
      },
      lng: 'en', // Язык по умолчанию
      fallbackLng: 'en', // Если перевод отсутствует, используем английский
      interpolation: {
        escapeValue: false, // react уже экранирует значения
      },
    });
};

export default init;