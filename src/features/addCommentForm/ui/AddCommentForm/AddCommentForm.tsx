import { memo, useCallback } from 'react';
import { classNames, useAppDispatch, Button, Input, DynamicModuleLoader } from 'shared';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    addCommentFormReducer,
    addCommentFormActions,
} from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { addCommentFormSelectors } from '../../model/selectors/addCommentFormSelectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(addCommentFormSelectors);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setComment(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        console.log('before clear');

        onSendComment(text || '');
        onCommentTextChange('');

        console.log('after clear');
    }, [onSendComment, onCommentTextChange, text]);
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={{ addCommentForm: addCommentFormReducer }}>
            <form className={classNames(cls.CommentToArticleForm, {}, [className])}>
                <Input
                    className={classNames(cls.input, {}, [])}
                    placeholder={t('Введите комментарий')}
                    onChange={onCommentTextChange}
                    value={text}
                />
                <Button onClick={onSendHandler}>{t('Добавить')}</Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;