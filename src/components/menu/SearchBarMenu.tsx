import React from 'react';
import SearchIcon from "@mui/icons-material/Search"
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface PropSearchBarMenu { }

export default function SearchBarMenu({ }: PropSearchBarMenu) {

    return (
        <div>
            <TextField
                className="rounded-lg w-13 h-2"
                label="Pesquisar"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};
