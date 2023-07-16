import React from 'react';
import Header from './Header';
import SearchBarMenu from './SearchBarMenu';
import TaskMenu from './TaskMenu';

interface PropMainMenu { }

export default function MainMenu({ }: PropMainMenu) {

    return (
        <div
            style={{
                backgroundColor: "rgba(255,255,255, 0.5)"
            }}
            className='col-span-3 flex flex-col h-screen p-3'>
            <Header />
            <SearchBarMenu />
            <TaskMenu />
        </div>
    );

};
