import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface PropTitleMenu {
    text: string
}

export default function TitleMenu({ text }: PropTitleMenu) {

    const theme = useTheme();

    return (
        <Typography
            color={theme.palette.text.primary}
            className='uppercase tracking-widest font-bold text-xs'
            variant='h6' >
            {text}
        </Typography>
    );
};
