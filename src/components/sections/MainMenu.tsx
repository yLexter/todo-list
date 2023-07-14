import React from 'react';
import Header from '../menu/Header';
import SearchBarMenu from '../menu/SearchBarMenu';
import TaskMenu from '../menu/TaskMenu';

interface PropMainMenu {}

export default function MainMenu ({}: PropMainMenu) {

    return (
        <div className='col-span-3 flex flex-col h-screen bg-stone-300 p-3'>
            <Header/>
            <SearchBarMenu/>
            <TaskMenu/>
        </div>
    );

};
