
import { SvgIconProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

type PropMenuItem = {
    onClick?: () => void;
    label: string
    Icon: React.ElementType
}

export default function MenuItem({ onClick, label, Icon }: PropMenuItem) {

    return (
        <div onClick={onClick} className='flex gap-2 items-center justify-start mb-1 cursor-pointer'>
            <Icon />
            <p className="font-ligth text-base tracking-wider captalize" >{label}</p>
        </div>
    );

};
