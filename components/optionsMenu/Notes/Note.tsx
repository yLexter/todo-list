import React from 'react';
import { INote } from '../../../tsUtils/interfaces';
import { Utils } from '@/tsUtils/classes';

interface IPropNotes {
    note: INote
}


export default function Note({ note }: IPropNotes) {

    const [r,g,b] = Utils.getRandomRGB();

    return (
        <div
           className='h-96 rounded-md p-5 shadow-lg'
           style={{
              width: "30%",
              backgroundColor: `rgb(${r}, ${g}, ${b}, 0.4)`
           }}
          >
            <h3 className='capitalize font-bold mb-3 text-2xl'>{note.title}</h3>
            <p className='leading-tight text-justify font-normal'>{note.description}</p>
        </div>
    );
};
