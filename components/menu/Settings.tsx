import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from './MenuItem';
import ItemList from './ListItems';
import LightModeIcon from '@mui/icons-material/LightMode';

interface IPropSettings { }

export default function Settings({ }: IPropSettings) {

    return (
        <ItemList>
            <MenuItem Icon={LightModeIcon} label="Tema Claro"/>
            <MenuItem Icon={MenuIcon} label='Configurações' />
            <MenuItem Icon={LogoutIcon} label='Sair' />
        </ItemList>
    );
};
