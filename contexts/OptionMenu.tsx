'use client'

import { TOptionMenu } from "@/tsUtils";
import { ReactNode, createContext, useContext, useState } from "react";

interface IOptionMenuContext {
    optionMenu: TOptionMenu;
    toggleOption: (option: TOptionMenu) => void;
}

const OptionMenuContext = createContext({} as IOptionMenuContext);

export const OptionMenuProvider = ({ children }: { children: ReactNode }) => {
    const [optionMenu, setOptionMenu] = useState<TOptionMenu>("today");

    const toggleOption = (option: TOptionMenu) => {
        if (optionMenu == option)
            return;

        setOptionMenu(option);
    }

    return (
        <OptionMenuContext.Provider value={{ optionMenu, toggleOption }}>
            {children}
        </OptionMenuContext.Provider>
    )
}

export const useOptionMenuContext = () => useContext(OptionMenuContext);