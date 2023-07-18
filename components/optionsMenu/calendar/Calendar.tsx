'use client'

import { Box, Button, IconButton, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import TitleOption from '../utils/TitleOption';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ITask } from '@/tsUtils/interfaces';
import TabDay from './TabDay';
import TabWeek from './TabWeek';
import TabMonth from './TabMonth';

interface IPropCalendar { }

interface IPropTabPanel {
    children: React.ReactNode
    value: number
    index: number
}

const TabPanel = ({ children, value, index }: IPropTabPanel) => {
    return (
        <>
            {value === index &&
                <Box>
                    {children}
                </Box>}
        </>
    )
}

export default function Calendar({ }: IPropCalendar) {

    const [currentTab, setCurrentTab] = useState(1);
    const handleChange = (e: React.SyntheticEvent<Element, Event>, value: number): void => {
        setCurrentTab(value);
    }

    const todayDate = new Date();
    const dateToString = todayDate.toLocaleString("pt-BR", {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const tasks: ITask[] = [
        {
            id: "a",
            content: "task1",
            date: new Date()
        },
        {
            id: "y",
            content: "task 2",
            date: new Date(Date.now() + 3600 * 1000 * 10 + 5 * 1000)
        },
        {
            id: "z",
            content: "task 3",
            date: new Date(Date.now() + 3600 * 1000 * 28 + 10 * 1000)
        }
    ]

    const sortedTasks = tasks.sort((a, b) => {
        const [hours1, minutes1] = [a.date.getHours(), a.date.getMinutes()];
        const [hours2, minutes2] = [b.date.getHours(), b.date.getMinutes()];

        return hours1 - hours2 || minutes1 - minutes2;
    })


    return (
        <Box className="col-span-9 w-full p-5"  >

            <div className='flex justify-between gap-2 mb-5'>
                <TitleOption title={dateToString} />
                <Button>Adicionar Evento</Button>
            </div>

            <div className='flex justify-between items-center mb-6'>
                <Tabs onChange={handleChange} value={currentTab} >
                    <Tab label="Dia" value={1} />
                    <Tab label="Semana" value={2} />
                    <Tab label="Mês" value={3} />
                </Tabs>

                <div className='flex gap-1'>
                    <IconButton size="large">
                        <NavigateBeforeIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton size="large" >
                        <NavigateNextIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>

            <TabPanel value={currentTab} index={1}>
                <TabDay tasks={sortedTasks} />
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
                <TabWeek tasks={sortedTasks} />
            </TabPanel>
            <TabPanel value={currentTab} index={3}>
                <TabMonth tasks={sortedTasks} />
            </TabPanel>
        </Box >
    );
};
