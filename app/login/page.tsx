'use client'

import { Button, Checkbox, Divider, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomButton from '../../components/utils/inputs/CustomButton';
import CustomInput from '../../components/utils/inputs/CustomInput';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SocialButton from './SocialButton';
import LockIcon from '@mui/icons-material/Lock';
import { useAuthenticateContext } from '@/contexts';
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from 'next/navigation';

type IPropLoginScreen = {}

const schema = z.object({
    user: z.string().min(1, "Este campo é obrigatório"),
    password: z.string().min(1, "Este campo é obrigatório")
})

type FormProps = z.infer<typeof schema>

export default function Page({ }: IPropLoginScreen) {

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({ resolver: zodResolver(schema) })
    const [showPassword, setShowPassword] = useState(false)
    const { authenticateUser } = useAuthenticateContext()

    const handleShowPassword = () => {
        setShowPassword(oldShowPassword => !oldShowPassword)
    }

    const onSubmit: SubmitHandler<FormProps> = (data) => {
        authenticateUser();
    }

    return (
        <div className='h-[70vh] w-1/3 flex flex-col gap-5 p-4 shadow-lg rounded-md bg-slate-200'>

            <div className='mb-4'>
                <h1 className='font-cb font-bold text-2xl'>Bem Vindo</h1>
                <h2 className='font-cb font-normal opacity-50 text-xl'>Faça o login para continuar</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-auto flex flex-col gap-5'>

                <TextField
                    {...register("user")}
                    placeholder="Digite seu usuário"
                    variant="standard"
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
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        variant="standard"
                        placeholder="Digite sua senha"
                        error={!!errors.password?.message}
                        helperText={errors.password?.message || ""}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
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
                        <a href='#'><span className='font-cb font-normal tracking-wide' >Esqueci minha senha</span> </a>
                    </div>
                </div>

                <CustomButton
                    className='rounded-3xl text-slate-50 bg-teal-600 h-11'
                    type='submit'
                    variant='outlined'>
                    Logar
                </CustomButton>
            </form>

            <Divider />

            <div className="flex gap-4 self-center">
                <SocialButton
                    sxIcon={{ color: "rgb(233, 30, 99)", fontSize: 40 }}
                    Icon={GoogleIcon}
                    onClick={() => { }}
                />
                <SocialButton
                    sxIcon={{ color: "blue", fontSize: 40 }}
                    Icon={FacebookIcon}
                    onClick={() => { }}
                />
                <SocialButton
                    sxIcon={{ color: "#00acee ", fontSize: 40 }}
                    Icon={TwitterIcon}
                    onClick={() => { }}
                />
            </div>

            <span>Não possui uma conta? <a className='underline' href='#'>Cadastre-se</a>  </span>

        </div >
    );
};
