import React from 'react';
import Header from './Header';
import SearchBarMenu from './SearchBarMenu';



interface PropMenu {}

export default function LeftMenu ({}: PropMenu) {

    return (
        <div className='flex flex-col w-1/5 h-screen bg-stone-300 p-3'>
            <Header/>
            <SearchBarMenu/>
        </div>
    );

};
