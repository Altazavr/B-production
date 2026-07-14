import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage: React.FC = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('О странице')}</h1>
        </Page>
    );
};

export default AboutPage;
