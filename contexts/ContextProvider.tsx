import React from 'react';
import { AppThemeProvider } from './Theme';
import { AuthenticateProvider } from './Authenticate';

type IPropContextProvider = {
    children: React.ReactNode
}

export default function ContextProvider({ children }: IPropContextProvider) {

    return (
        <AppThemeProvider>
            <AuthenticateProvider>
                {children}
            </AuthenticateProvider>
        </AppThemeProvider>
    );
};
