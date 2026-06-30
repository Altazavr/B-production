import { createSlice } from '@reduxjs/toolkit';
import { AddCommentsForArticle } from 'pages/ArticlesDetailsPage/model/services/addCommentForArticle/addCommentsForArticle';
import { addCommentFormSchema } from '../types/addCommentForm';

const initialState: addCommentFormSchema = {
    text: '',
    error: '',
    isLoading: false,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setComment: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(AddCommentsForArticle.fulfilled, (state: addCommentFormSchema, action) => {
            state.isLoading = false;
            state.error = '';
        });
        builder.addCase(AddCommentsForArticle.pending, (state: addCommentFormSchema) => {
            state.isLoading = true;
        });
        builder.addCase(AddCommentsForArticle.rejected, (state: addCommentFormSchema) => {
            state.isLoading = false;
            state.error = 'Error';
        });
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
