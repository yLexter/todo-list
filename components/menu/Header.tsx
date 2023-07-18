

import React, { useContext } from 'react';
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton, } from '@mui/material';
import SearchBarMenu from './SearchBarMenu';

interface PropHeader { }

export default function Header({ }: PropHeader) {
    return (
        <header className='h-1/6 mb-0.5'>

            <div className="flex items-center justify-between gap-5 mb-4" >
                <h1 className="font-bold tracking-wide text-lg">Menu</h1>

                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            </div>

            <SearchBarMenu />
        </header>
    );
};
