import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    path: string;
    text: string;
}

export const SidebarItemsLists: SidebarItemType[] = [
    {
        Icon: MainIcon,
        path: RoutePath.main,
        text: 'Главная страница',
    },
    {
        Icon: HomeIcon,
        path: RoutePath.about,
        text: 'Страница о',
    },
    {
        Icon: ProfileIcon,
        path: RoutePath.profile,
        text: 'Страница профила',
    },
];
