import { useTheme } from '@mui/material';
import React, { ElementType, InputHTMLAttributes, ReactNode } from 'react';

type IPropCustomInput = {
    IconLeft?: ElementType;
    IconRigth?: ElementType;
    title?: string;
} & InputHTMLAttributes<HTMLInputElement>;


export default function CustomInput({ IconLeft, IconRigth, title, ...rest }: IPropCustomInput) {

    const theme = useTheme()

    return (
        <div>
            {title && <p className='font-semibold text-lg tracking-wider capitalize'>{title}</p>}

            <div className='flex gap-2'>
                {IconLeft && <IconLeft />}

                <input
                    color={theme.palette.text.primary}
                    style={{ backgroundColor: theme.palette.background.paper }} {...rest}>
                </input>

                {IconRigth && <IconRigth />}
            </div>
        </div>
    );
};
