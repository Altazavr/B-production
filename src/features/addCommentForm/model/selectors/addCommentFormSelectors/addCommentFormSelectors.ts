import { StateSchema } from 'app/providers/StoreProvider';

export const addCommentFormSelectors = (state: StateSchema) => state.addCommentForm?.text;
export const getArticleCommentIsLoading = (state: StateSchema) => state.addCommentForm?.isLoading;
export const getArticleCommentError = (state: StateSchema) => state.addCommentForm?.error;