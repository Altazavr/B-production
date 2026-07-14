import { BugButton } from 'app/providers/ErrorBoundary';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <h1>{t('Главная')}</h1>
            <BugButton />
        </Page>
    );
};

export default MainPage;
