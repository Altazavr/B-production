import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { fetchArticlesList } from '../service/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/ArticlePageSchema';

export const articlesAdapter = createEntityAdapter<Article>({ selectId: (article) => article.id });

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'pages/ArticlePage',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const articlesPageReducer = articlesPageSlice.reducer;
export const articlesPageActions = articlesPageSlice.actions;