
import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface IPropTitleOption {
    title: string
}

export default function TitleOption({ title }: IPropTitleOption) {

    const theme = useTheme();

    return (
        <Typography
            color={theme.palette.text.primary}
            className='font-bold capitalize tracking-[0.1rem] text-4xl m-2'
            variant='h1'
        >{title}</Typography>
    );
};
