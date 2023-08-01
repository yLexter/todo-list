import React, { ReactNode } from 'react';
import LayoutProvider from '../LayoutProvider';

type IPropLayout = {
    children: ReactNode
}

export default function Layout({ children }: IPropLayout) {

    return (
        <LayoutProvider>
            {children}
        </LayoutProvider>
    );
};
