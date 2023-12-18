"use client";

import { DarkTheme, LigthTheme } from "@/themes";
import { TOptionsTheme } from "@/tsUtils";
import { Theme, ThemeProvider } from "@mui/material";
import {
   createContext,
   useCallback,
   useMemo,
   useState,
   useContext,
} from "react";

interface IThemeProps {
   themeName: TOptionsTheme;
   toggleTheme: () => void;
   theme: Theme;
}

const ThemeContext = createContext({} as IThemeProps);

export const AppThemeProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [themeName, setTheme] = useState<TOptionsTheme>("light");

   const toggleTheme = useCallback(() => {
      setTheme((oldTheme) => (oldTheme == "light" ? "dark" : "light"));
   }, []);

   const currentTheme = useMemo(() => {
      return themeName == "light" ? LigthTheme : DarkTheme;
   }, [themeName]);

   return (
      <ThemeContext.Provider
         value={{ theme: currentTheme, themeName, toggleTheme }}
      >
         <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
   );
};

export const useAppThemeContext = () => useContext(ThemeContext);
