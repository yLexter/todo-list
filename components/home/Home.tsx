'use client'

import React, { ReactNode } from 'react';
import Calendar from "../optionsMenu/calendar/Calendar"
import LeftMenu from "../menu/MainMenu"
import { useOptionMenuContext } from '@/contexts/OptionMenu';
import { TOptionMenu } from "../../tsUtils"
import Notes from '../optionsMenu/notes/Notes';
import { useAppThemeContext } from '@/contexts';

type IPropHome = {}

export default function Home({ }: IPropHome) {

    const { theme } = useAppThemeContext();
    const { optionMenu } = useOptionMenuContext();

    return (
        <div
            style={{ backgroundColor: theme.palette.background.default }}
            className="w-full h-full grid grid-cols-12 gap-4">
            <LeftMenu />
            {optionMenu === "today" && <></>}
            {optionMenu === "calendar" && <Calendar />}
            {optionMenu === "notes" && <Notes notes={[]} />}
        </div>
    );
};
