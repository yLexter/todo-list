
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
        <div className='flex gap-3 items-center justify-center'>
            <Icon />
            <p
                className="font-bold text-lg tracking-wider uppercase"
                onClick={onClick}
            >{label}</p>
        </div>
    );

};
