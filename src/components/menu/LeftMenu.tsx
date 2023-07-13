import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"


interface PropMenu {}

export default function LeftMenu ({}: PropMenu) {

    return (
        <div className='flex flex-col w-1/5 h-screen bg-stone-300 p-3'>

          <div className="flex items-center justify-between gap-5 mb-10">

          <h1 className="font-bold tracking-wide text-lg">Menu</h1>

             <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>

          </div>
           
           <div>

             <TextField
                className="rounded-lg w-13 h-5"
                label="Pesquisar"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>
                  ),
                }}
             />

           </div>

          
        </div>
    );

};
