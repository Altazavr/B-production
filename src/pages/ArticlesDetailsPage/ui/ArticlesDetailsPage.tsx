import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>{t('Aticle detailes')}</div>
    );
};

export default memo(ArticlesDetailsPage);