import { useState } from 'react';
import { classNames, Button, ThemeButton, ButtonSize, AppLink } from 'shared';
import { LangSwitcher, ThemeSwitcher } from 'features';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Sidebar.module.scss';
import HomeIcon from '../../assets/home.svg';
import MainIcon from '../../assets/main.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <HomeIcon className={cls.icon} />
                        <span className={cls.link}>{t('Главная')}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('О сайте')}</span>
                    </AppLink>
                </div>
            </div>
            <Button
                data-testid="toggleBtn"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
