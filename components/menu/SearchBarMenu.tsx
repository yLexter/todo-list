import React from 'react';
import SearchIcon from "@mui/icons-material/Search"
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface PropSearchBarMenu { }

export default function SearchBarMenu({ }: PropSearchBarMenu) {

    return (
        <TextField
            className="rounded-lg w-13 h-2"
            variant="outlined"
            placeholder='Pesquisar'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    )
};
