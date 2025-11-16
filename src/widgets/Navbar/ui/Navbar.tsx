/* eslint-disable i18next/no-literal-string */
import { Button, classNames, Modal, ThemeButton } from 'shared';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const onToggleModal = useCallback(
        () => setIsAuthModal((prev) => !prev),
        [],
    );
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t(
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia eius dolore. Dolores accusamus iusto, consequatur magni fugit enim vero.',
                )}
            </Modal>
        </div>
    );
};
