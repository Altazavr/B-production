import { Button, classNames, Input, Text, ThemeButton } from 'shared';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../models/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../models/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../models/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
