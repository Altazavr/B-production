import { Button, classNames, DynamicModuleLoader, Text, ThemeButton, useAppDispatch } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentReducer, getArticlesDetailsComments } from '../model/slices/ArticleDeatilsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getCommentIsLoading } from '../model/selectors/comments';
import { AddCommentsForArticle } from '../model/services/addCommentForArticle/addCommentsForArticle';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticlesDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getCommentIsLoading);
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(AddCommentsForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={{ articleDetailsComments: articleDetailsCommentReducer }}
        >
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);