import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const AboutPage: React.FC = () => {
    const { t } = useTranslation('about');
    console.log(i18n.store.data.ru?.about);
    return (
        <div>
            <h1>{t('О странице')}</h1>
        </div>
    );
};

export default AboutPage;
