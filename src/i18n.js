import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Ajoutez ici vos chaînes de texte en anglais
        },
      },
      fr: {
        translation: {
          // Ajoutez ici vos chaînes de texte en français
        },
      },
    },
    lng: navigator.language.startsWith('fr') ? 'fr' : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;