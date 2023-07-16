

import { Box, Button, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import TitleOption from '../utils/TitleOption';

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
    const handleChange = (e: React.SyntheticEvent<Element, Event>, value: number) => {
        setCurrentTab(value);
    }

    const todayDate = new Date();
    const dateToString = todayDate.toLocaleString("pt-BR", {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Box className="col-span-9 w-full p-4"  >

            <div className='flex justify-between gap-2 mb-4'>
                <TitleOption title={dateToString} />
                <Button>Adicionar Evento</Button>
            </div>

            <Tabs onChange={handleChange} value={currentTab} >
                <Tab label="Dia" value={1} />
                <Tab label="Mês" value={2} />
                <Tab label="Ano" value={3} />
            </Tabs>

            <TabPanel value={currentTab} index={1}>
                Item One
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
