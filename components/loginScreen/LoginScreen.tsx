'use client'

import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type IPropLoginScreen = {}

export default function LoginScreen({ }: IPropLoginScreen) {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((value) => !value)
    }

    return (
        <div className='w-full h-full flex items-center justify-center' >

            <div className='h-auto w-80'>

                <form className='flex flex-col gap-3'>
                    <TextField
                        label="Usuário"
                        placeholder='Digite o usuário'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            )
                        }}>

                    </TextField>

                    <TextField
                        type={showPassword ? "text" : "password"}
                        label="Senha"
                        placeholder="Senha"
                        onClick={handleShowPassword}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}  >
                    </TextField>

                    <Button type='submit'>Logar</Button>
                </form>


            </div>
            
        </div>
    );
};
