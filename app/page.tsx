'use client'

import React from "react";
import { AppThemeProvider, AuthenticateProvider } from "@/contexts";
import Home from "@/components/home/Home";
import { OptionMenuProvider } from "@/contexts/OptionMenu";

export default function App() {

    return (
        <AppThemeProvider>
            <OptionMenuProvider>
                <AuthenticateProvider>
                    <Home />
                </AuthenticateProvider>
            </OptionMenuProvider>
        </AppThemeProvider>
    )

}