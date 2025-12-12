import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../models/slice/CounterSlice';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();

    const counterValue = useSelector(getCounterValue);

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <button
                type="button"
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </button>
            <button
                type="button"
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </button>
        </div>
    );
};
