import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared';
import { Mods } from 'shared/lib/className';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        size = ButtonSize.M,
        square,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, mods, [className, cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
