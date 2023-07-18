import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { CustomModal } from "../modal/Modal"

type IPropAddNote = {
    isOpen: boolean;
    handleClose: () => void
}

export default function ModalAddNote({ isOpen, handleClose }: IPropAddNote) {

    return (
        <CustomModal.Root
            isOpen={isOpen}
            handleClose={handleClose}
            className='h-[80vh] w-[30%]' >

            <>
                <CustomModal.CloseButton closeModal={handleClose} />
                <Box >
                    <div className="flex flex-col gap-7 p-4">

                        <Typography variant='h1' fontSize="2rem" alignSelf="center" >
                            Adicionar Nota
                        </Typography>

                        <TextField label="Título" variant='standard' />

                        <TextField
                            label="Descrição"
                            multiline
                            rows={4}
                            variant="standard"
                        />

                        <Button
                            startIcon={<SaveIcon />}
                            variant='contained'
                        >Salvar</Button>

                    </div>
                </Box>
            </>
        </CustomModal.Root>
    );
};
