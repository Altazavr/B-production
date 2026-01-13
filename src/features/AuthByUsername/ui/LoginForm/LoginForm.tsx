import { classNames } from 'shared/lib/className';
import { useTranslation } from 'react-i18next';
import {
    Button,
    ThemeButton,
    Text,
    TextTheme,
    DynamicModuleLoader,
    useAppDispatch,
} from 'shared';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';

import { useCallback } from 'react';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/service/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginLoading/getLoginIsLoading';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const initialReducers: ReducersList = { loginForm: loginReducer };
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
