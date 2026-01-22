import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Currency } from '../../models/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );
    return (
        <Select
            className={classNames('', {}, [className])}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            label={t('Укажите вашу валюту')}
        />
    );
};
