import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentIsLoading = (state: StateSchema) => state.ArticleDetailsComments?.isLoading;
export const getCommentError = (state: StateSchema) => state.ArticleDetailsComments?.error;