'use client'

import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';

type IPropLoginScreen = {}

const schema = z.object({
    user: z.string().min(1, "Este campo é obrigatório"),
    password: z.string().min(1, "Este campo é obrigatório")
})

type FormProps = z.infer<typeof schema>

export default function LoginScreen({ }: IPropLoginScreen) {

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(oldShowPassword => !oldShowPassword)
    }

    const onSubmit: SubmitHandler<FormProps> = (data) => {
        console.log(data)
    }

    return (
        <div className='h-[70vh] w-96 flex flex-col gap-5 p-4 shadow-lg rounded-md'>

            <div className='mb-4'>
                <h1>Login</h1>
                <h2>Faça o login para continuar</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-auto flex flex-col gap-10'>

                <TextField
                 {...register("user")}
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
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    label="Senha"
                    placeholder="Senha"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}  >
                </TextField>

            </form>

        </div>
    );
};
