import { memo } from 'react';
import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCardIsLoading.module.scss';

interface CommentCardIsLoadingProps {
    className?: string;
}

export const CommentCardIsLoading = memo((props: CommentCardIsLoadingProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentListIsLoading, {}, [className])}>
            <div className={classNames(cls.CommentCardIsLoading, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
            <div className={classNames(cls.CommentCardIsLoading, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
            <div className={classNames(cls.CommentCardIsLoading, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        </div>
    );
});
