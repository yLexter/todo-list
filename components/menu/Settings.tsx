import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from './MenuItem';
import ItemList from './ListItems';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppThemeContext } from '@/contexts';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface IPropSettings { }

export default function Settings({ }: IPropSettings) {

    const { themeName, toggleTheme } = useAppThemeContext();

    return (
        <ItemList>
            {themeName === "light" && <MenuItem onClick={() => toggleTheme()} Icon={LightModeIcon} label="Tema Claro" />}
            {themeName === "dark" && <MenuItem onClick={() => toggleTheme()} Icon={DarkModeIcon} label="Tema Escuro" />}
            <MenuItem Icon={MenuIcon} label='Configurações' />
            <MenuItem Icon={LogoutIcon} label='Sair' />
        </ItemList>
    );
};
