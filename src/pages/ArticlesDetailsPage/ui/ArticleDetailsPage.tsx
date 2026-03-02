import { classNames, DynamicModuleLoader, Text, useAppDispatch } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId';
import { articleDetailsCommentReducer, getArticlesDetailsComments } from '../model/slices/ArticleDeatilsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getCommentError, getCommentIsLoading } from '../model/selectors/comments';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticlesDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getCommentIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

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
            reducers={{ ArticleDetailsComments: articleDetailsCommentReducer }}
        >
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);