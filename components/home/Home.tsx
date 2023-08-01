'use client'

import React, { ReactNode } from 'react';
import Calendar from "../../app/calendario/page"
import LeftMenu from "../menu/MainMenu"
import { useOptionMenuContext } from '@/contexts/OptionMenu';
import Notes from '../../app/notas/page';
import { useTheme } from '@mui/material';
import LoginScreen from '../../app/login/page';
import { useAuthenticateContext } from '@/contexts';

type IPropHome = {}

export default function Home({  }: IPropHome) {

    const theme = useTheme();

    return (
        <div
            style={{ backgroundColor: theme.palette.background.default }}
            className="w-full h-full grid grid-cols-12 gap-4">
           
        </div>
    );




};
