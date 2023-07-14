
import { SvgIconProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

interface PropMenuItem {
    onClick?: () => void;
    label: string
    Icon: React.ElementType
}

export default function MenuItem({ onClick, label, Icon }: PropMenuItem) {

    return (
        <div className='flex gap-2 items-center justify-start mb-1'>
            <Icon />
            <p
                className="font-ligth text-sm tracking-wider captalize cursor-pointer"
                onClick={onClick}
            >{label}</p>
        </div>
    );

};
