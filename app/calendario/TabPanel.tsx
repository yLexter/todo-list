import { Box } from '@mui/material';
import React from 'react';

type IPropTabPanel = {
    children: React.ReactNode
    value: number
    index: number
}

export default function TabPanel({ children, value, index }: IPropTabPanel) {

    return (
        <>
            {value === index &&
                <Box>
                    {children}
                </Box>}
        </>
    );
};
