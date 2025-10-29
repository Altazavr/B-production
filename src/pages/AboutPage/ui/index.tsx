import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();
    return <h1>{t('Остранице')}</h1>;
}

export default AboutPage;
