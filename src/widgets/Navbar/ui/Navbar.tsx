/* eslint-disable i18next/no-literal-string */
import { Button, classNames, Modal, ThemeButton } from 'shared';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onShowModal = useCallback(() => setIsAuthModal(true), []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onShowModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
