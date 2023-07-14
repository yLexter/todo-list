
import React from 'react';

interface IPropTitleOption {
    title: string
}

export default function TitleOption({ title }: IPropTitleOption) {

    return (
        <h1
         className='font-bold capitalize tracking text-4xl m-2'
        >{title}</h1>
    );
};
