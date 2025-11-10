import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const Toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={Toggle}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >
            {short ? t('короткий язык') : t('язык')}
        </Button>
    );
};
