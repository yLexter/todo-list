import { IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

type IPropModalCloseButton = {
    closeModal: () => void
}

export default function ModalCloseButton({ closeModal }: IPropModalCloseButton) {

    return (
        <IconButton className='absolute w-auto h-auto top-0 right-0 mb-5' onClick={closeModal}>
            <CloseIcon />
        </IconButton>
    );
};
