'use client'

import React from "react";
import { AppThemeProvider } from "@/contexts";
import Home from "@/components/home/Home";
import { OptionMenuProvider } from "@/contexts/OptionMenu";

export default function App() {

    return (
        <AppThemeProvider>
            <OptionMenuProvider>
                <Home />
            </OptionMenuProvider>
        </AppThemeProvider>
    )

}