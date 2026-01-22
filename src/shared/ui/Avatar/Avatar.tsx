import { classNames } from 'shared';
import { Mods } from 'shared/lib/className';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    alt?: string;
    src?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const { className, alt, src, size } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    return (
        <img
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
