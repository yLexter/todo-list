

import React from 'react';
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton, } from '@mui/material';

interface PropHeader { }

export default function Header({ }: PropHeader) {

    return (
        <header className="flex items-center justify-between gap-5 mb-10">

            <h1 className="font-bold tracking-wide text-lg">Menu</h1>

            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
        </header>
    );
};
