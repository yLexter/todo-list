'use client'

import { DarkTheme, LigthTheme } from "@/themes"
import { ThemeProvider } from "@mui/material"
import { createContext, useCallback, useMemo, useState, useContext } from "react"

type TOptionsTheme = "light" | "dark"

interface IThemeProps {
    theme: TOptionsTheme
    toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeProps);

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<TOptionsTheme>("light");

    const toggleTheme = useCallback(() => {
        setTheme(oldTheme => oldTheme == "light" ? "dark" : "light");
    }, [])

    const currentTheme = useMemo(() => {
        return theme == "light" ? LigthTheme : DarkTheme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider >
    )
}

export const useAppThemeContext = () => useContext(ThemeContext)

