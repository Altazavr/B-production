import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    const { t } = useTranslation();
    return <Button onClick={onThrow}>{t('бросить ошибку')}</Button>;
};
