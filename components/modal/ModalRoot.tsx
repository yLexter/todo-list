import { useAppThemeContext } from '@/contexts';
import { Box, Modal } from '@mui/material';
import React, { JSXElementConstructor, ReactElement } from 'react';

type IPropModalRoot = {
    isOpen: boolean;
    children: ReactElement<any, string | JSXElementConstructor<any>>;
    handleClose: () => void;
    className?: string;
}

export default function ModalRoot({
    children,
    isOpen,
    handleClose,
    className = 'w-96 h-96'
}: IPropModalRoot) {

    const { theme } = useAppThemeContext();

    return (
        <Modal
            className='flex justify-center items-center'
            onClose={handleClose}
            open={isOpen} >

            <div
                style={{
                    position: "relative",
                    backgroundColor: theme.palette.background.paper
                }}
                className={className}>
                {children}
            </div>
        </Modal>
    );
};
