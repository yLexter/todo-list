import { Modal } from '@mui/material';
import React, { JSXElementConstructor, ReactElement } from 'react';

interface IPropModalRoot {
    openModal: boolean
    children: ReactElement<any, string | JSXElementConstructor<any>>
    handleClose: () => void
}

export default function ModalRoot({ children, openModal, handleClose }: IPropModalRoot) {

    return (
        <Modal
            onClose={handleClose}
            open={openModal} >
           {children}
        </Modal>
    );
};
