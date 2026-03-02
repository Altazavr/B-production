import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { EntityAdapter } from '@reduxjs/toolkit/src/entities/models';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentSchema';

export const commentsAdapter: EntityAdapter<Comment> = createEntityAdapter(
    { sortComparer: (a, b) => a.id.localeCompare(b.id) },
);

export const getArticlesDetailsComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.ArticleDetailsComments ?? commentsAdapter.getInitialState(),
);

export const articleDeatilsCommentsSlice = createSlice({
    name: 'entity/Comment',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: { addComment: commentsAdapter.addOne },
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const articleDetailsCommentReducer = articleDeatilsCommentsSlice.reducer;
export const articleDetailsCommentActions = articleDeatilsCommentsSlice.actions;