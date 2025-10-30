import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@translations/en/translation.json';
import translationRU from '@translations/ru/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        ru: { translation: translationRU },
    },
    fallbackLng: 'en',
    debug: __IS_DEV__,
    interpolation: { escapeValue: false },
});

export default i18n;
