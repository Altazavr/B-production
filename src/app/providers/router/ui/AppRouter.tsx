import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import RequireAuth from './RequiredAuth';

export function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={(
                    <div className="page-wrapper">
                        {route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                    </div>
                )}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
}
