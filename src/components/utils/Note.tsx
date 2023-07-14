import React from 'react';
import { INote } from '../../tsUtils/interfaces';

interface IPropNotes {
    note: INote
}

const randomNumber = (max: number) => ~~(Math.random() * max)

export default function Note({ note }: IPropNotes) {

    const [r,g,b] = [randomNumber(256), randomNumber(256), randomNumber(256)]

    return (
        <div
           className='h-96 w-1/4 rounded-md p-5 shadow-lg'
           style={{
              backgroundColor: `rgb(${r}, ${g}, ${b}, 0.4)`
           }}
          >
            <h3 className='capitalize font-bold mb-3 text-2xl'>{note.title}</h3>
            <p className='leading-tight text-justify font-normal'>{note.description}</p>
        </div>
    );
};
