import React from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type IPropButtonAddNote = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ButtonAddNote({ onClick }: IPropButtonAddNote) {

    return (
        <Box
            sx={{
                width: "30%",
                heigth: "384px",
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgb(255, 255, 255, 0.2)"
            }}
        >
            <IconButton onClick={onClick} sx={{ width: "100%" }}>
                <AddIcon sx={{ width: "30%", height: "30%" }} />
            </IconButton>
        </Box>

    )
};
