/* eslint-disable i18next/no-literal-string */
import { UseTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/index';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = UseTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
