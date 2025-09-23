import { useTranslation } from 'react-i18next';
import { classNames, Button } from 'shared';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}
function reloadPage() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <h1>{t('Возникла непредвиденная ошибка')}</h1>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
