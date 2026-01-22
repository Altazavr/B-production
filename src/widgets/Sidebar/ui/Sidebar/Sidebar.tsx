import { memo, useState } from 'react';
import {
    classNames,
    Button,
    ThemeButton,
    ButtonSize,
    LangSwitcher,
    ThemeSwitcher,
} from 'shared';
import { SidebarItemsLists } from '../../models/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
                {SidebarItemsLists.map((item) => (
                    <SidebarItem
                        collapsed={collapsed}
                        item={item}
                        key={item.path}
                    />
                ))}
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
});
