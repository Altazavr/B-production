import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Остранице')}</h1>
            <Counter />
        </div>
    );
};

export default AboutPage;
