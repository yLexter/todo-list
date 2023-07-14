import React from 'react';
import Header from './Header';
import SearchBarMenu from './SearchBarMenu';
import TaskMenu from './TaskMenu';

interface PropMainMenu {}

export default function MainMenu ({}: PropMainMenu) {

    return (
        <div className='w-1/2 flex flex-col h-screen bg-stone-300 p-3'>
            <Header/>
            <SearchBarMenu/>
            <TaskMenu/>
        </div>
    );

};
