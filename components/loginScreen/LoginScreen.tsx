'use client'

import { Button, Checkbox, Divider, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomButton from '../utils/inputs/CustomButton';
import CustomInput from '../utils/inputs/CustomInput';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SocialButton from './SocialButton';

type IPropLoginScreen = {}

const schema = z.object({
    user: z.string().min(3, "Este campo precisa de 3 caracteres"),
    password: z.string().min(3, "Este campo precisa de 3 caracteres")
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
        <div className='h-[70vh] w-1/3 flex flex-col gap-5 p-4 shadow-lg rounded-md'>

            <div className='mb-4'>
                <h1>Login</h1>
                <h2>Faça o login para continuar</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-auto flex flex-col gap-5'>

                <TextField
                    {...register("user", { required: "Este campo é obrigatório" })}
                    label="Usuário"
                    variant="standard"
                    placeholder='Digite o usuário'
                    error={!!errors.user?.message}
                    helperText={errors.user?.message || ""}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        )
                    }}>
                </TextField>

                <div className='w-auto'>
                    <TextField
                        sx={{ width: "100%" }}
                        {...register("password", { required: "Este campo é obrigatório" })}
                        type={showPassword ? "text" : "password"}
                        variant="standard"
                        label="Senha"
                        placeholder="Senha"
                        error={!!errors.password?.message}
                        helperText={errors.password?.message || ""}
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

                    <div className="flex items-center justify-between">
                        <FormControlLabel control={<Checkbox />} label="Lembrar-me" />
                        <a><span className='font-cb font-normal tracking-wide' >Esqueci minha senha</span> </a>
                    </div>
                </div>

                <CustomButton type='submit' variant='outlined'>
                    Teste
                </CustomButton>
            </form>

            <Divider />

            <div className="flex gap-4">
                <SocialButton Icon={GoogleIcon} onClick={() => { }} />
                <SocialButton Icon={FacebookIcon} onClick={() => { }} />
                <SocialButton Icon={TwitterIcon} onClick={() => { }} />
            </div>

            <span>Não possui uma conta? <a href='#'>Cadastre-se</a>  </span>

        </div>
    );
};
