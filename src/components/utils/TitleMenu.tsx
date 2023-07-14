import React from 'react';

interface PropTitleMenu {
    text: string
}

export default function TitleMenu({ text }: PropTitleMenu) {

    return (
        <p
            className='uppercase tracking-wider font-bold text-xs'
        >{text}</p>
    );
};
