
import { ListItemButton, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

type PropMenuItem = {
    onClick: () => void;
    label: string
    Icon: React.ElementType
}

export default function MenuItem({ onClick, label, Icon }: PropMenuItem) {

    return (
        <ListItemButton onClick={() => onClick()}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
};
