import React from 'react';
import MenuItem from './MenuItem';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ListItems from './ListItems';
import { useOptionMenuContext } from '@/contexts/OptionMenu';

interface PropTaskMenu { }

export default function TaskMenu({ }: PropTaskMenu) {

    const { toggleOption } = useOptionMenuContext();

    return (
        <ListItems text='Tarefas'>
            <MenuItem onClick={() => toggleOption("notes")} label='Notas' Icon={StickyNote2Icon} />
            <MenuItem onClick={() => toggleOption("calendar")} label='Calendário' Icon={CalendarMonthIcon} />
            <MenuItem onClick={() => toggleOption("today")} label='Hoje' Icon={FormatListNumberedIcon} />
        </ListItems >
    );
};

