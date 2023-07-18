import React from 'react';
import Header from './Header';
import TaskMenu from './TaskMenu';
import Settings from './Settings';
import Lists from './Lists';

interface PropMainMenu { }

export default function MainMenu({ }: PropMainMenu) {

    return (
        <div
            style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}
            className='col-span-3 flex flex-col p-3 h-screen'>
            <Header />
            <TaskMenu />
            <Lists />
            <Settings />
        </div>
    );

};
