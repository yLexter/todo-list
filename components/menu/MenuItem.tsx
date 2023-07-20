
'use client'

import { useAppThemeContext } from '@/contexts';
import { ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap, Typography, useTheme, } from '@mui/material';
import Icon from '@mui/material/Icon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

type PropMenuItem = {
    onClick: () => void;
    label: string
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
}

export default function MenuItem({ onClick, label, Icon }: PropMenuItem) {

    const { themeName, theme } = useAppThemeContext()

    return (
        <ListItemButton onClick={() => onClick()}>
            <ListItemIcon >
                <Icon color={themeName === "dark" ? "secondary" : "primary"} />
            </ListItemIcon>

            <Typography
                className='font-normal block text-base tracking-wider font-cb'
                color={theme.palette.text.primary}
                variant='inherit'
            >{label}
            </Typography>

        </ListItemButton>
    )
};
