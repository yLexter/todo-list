import { Typography } from '@mui/material';
import React from 'react';

interface PropTitleMenu {
    text: string
}

export default function TitleMenu({ text }: PropTitleMenu) {

    return (
        <Typography
            className='uppercase tracking-widest font-bold text-xs'
            variant='h6' >
            {text}
        </Typography>
    );
};
