import { classNames, Portal } from 'shared';
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { UseTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const { theme } = UseTheme();
    const ANIMATION_DELAY = 300;
    const { className, children, isOpen, onClose } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
