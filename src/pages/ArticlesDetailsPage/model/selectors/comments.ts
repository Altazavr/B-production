import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getCommentError = (state: StateSchema) => state.articleDetailsComments?.error;