import { ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useDispatch, useStore } from 'react-redux';
import { StateSchemakey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersLists = {
    [name in StateSchemakey]?: Reducer;
};

type ReducersTypeEntries = [StateSchemakey, Reducer];

interface DynamicModuleLoaderProps {
    children?: ReactNode;
    reducers: ReducersLists;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersTypeEntries) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            },
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name, reducer]: ReducersTypeEntries) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    },
                );
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
