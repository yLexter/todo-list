

import React from 'react';
import MenuItem from './MenuItem';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Title from '../utils/TitleMenu';

interface PropTaskMenu {}

export default function TaskMenu ({}: PropTaskMenu) {

    return (
        <div className='flex flex-col gap-2'>
            <Title text='Tarefas'/>

            <div className='pl-1'>
                <MenuItem label='Figurinhas' Icon={StickyNote2Icon} />
                <MenuItem label='Calendário' Icon={CalendarMonthIcon}/>
                <MenuItem label='Hoje' Icon={FormatListNumberedIcon}/>
            </div>
        </div>
    );
};

