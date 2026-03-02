import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment';
import { CommentCardIsLoading } from 'entities/Comment/ui/CommentCardIsLoading/CommentCardIsLoading';
import { Text } from 'shared';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <CommentCardIsLoading />
        );
    }

    if (!comments?.length) {
        return (
            <Text text={t('Комментарии отсутствуют')} />
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments.map((comment) => (
                <CommentCard
                    className={cls.comment}
                    comment={comment}
                    key={comment.id}
                />
            ))}
        </div>
    );
});
