import React from 'react';
import MenuItem from './MenuItem';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ListItems from './ListItems';
import { useOptionMenuContext } from '@/contexts/OptionMenu';
import { redirect } from 'next/navigation';

interface PropTaskMenu { }

export default function TaskMenu({ }: PropTaskMenu) {

    return (
        <ListItems text='Tarefas'>
            <MenuItem onClick={() => redirect("/notas")} label='Notas' Icon={StickyNote2Icon} />
            <MenuItem onClick={() => redirect("/calendario")} label='Calendário' Icon={CalendarMonthIcon} />
            <MenuItem onClick={() => redirect("/hoje")} label='Hoje' Icon={FormatListNumberedIcon} />
        </ListItems >
    );
};

