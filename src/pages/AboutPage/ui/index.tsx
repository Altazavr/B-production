import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();
    return <h1>{t('Остранице')}</h1>;
};

export default AboutPage;
