'use client'

import React, { ReactNode } from 'react';
import Calendar from "../optionsMenu/calendar/Calendar"
import LeftMenu from "../menu/MainMenu"
import { useOptionMenuContext } from '@/contexts/OptionMenu';
import { TOptionMenu } from "../../tsUtils"
import Notes from '../optionsMenu/Notes/Notes';

type IPropHome = {}

export default function Home({ }: IPropHome) {

    const { optionMenu } = useOptionMenuContext();

    return (
        <div className="grid grid-cols-12 gap-4">
            <LeftMenu />
            {optionMenu === "today" && <></>}
            {optionMenu === "calendar" && <Calendar />}
            {optionMenu === "notes" && <Notes notes={[]} />}
        </div>
    );
};
