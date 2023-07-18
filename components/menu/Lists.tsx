import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from './MenuItem';
import ListItems from './ListItems';

type IPropLists = {}

export default function Lists({ }: IPropLists) {

    return (
        <ListItems text='Listas'>
            <MenuItem Icon={AddIcon} label="Adicionar Lista" />
        </ListItems>
    );
};
