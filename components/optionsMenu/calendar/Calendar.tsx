'use client'

import { Box, Button, IconButton, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import TitleOption from '../utils/TitleOption';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ITask } from '@/tsUtils/interfaces';
import { Utils } from '@/tsUtils/classes';

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

const TabPanelChildren = ({ task }: { task: ITask }) => {

    const [r, g, b] = Utils.getRandomRGB();

    return (
        <Box className='h-20 w-full flex gap-2'>

            <div className='w-1/12 self-center'>
                {Utils.getTimeFormatted(task.date)}
            </div>

            <div
                style={{ backgroundColor: `rgb(${r},${g},${b}, 0.5)` }}
                className='w-11/12 p-3'>
                <p>{task.content}</p>
            </div>
        </Box>
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

    const exampleTask: ITask = {
        id: "z",
        content: "mucho sexo",
        date: new Date()
    }

    return (
        <Box className="col-span-9 w-full p-5"  >

            <div className='flex justify-between gap-2 mb-4'>
                <TitleOption title={dateToString} />
                <Button>Adicionar Evento</Button>
            </div>

            <div className='flex justify-between items-center mb-2'>
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
                <TabPanelChildren task={exampleTask} />
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
                Item Two
            </TabPanel>
            <TabPanel value={currentTab} index={3}>
                Item Three
            </TabPanel>

        </Box >
    );
};
