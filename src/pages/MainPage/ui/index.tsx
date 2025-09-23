import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Главная')}</h1>
            <BugButton />
        </div>
    );
}

export default MainPage;
