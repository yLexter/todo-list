import React from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { CustomModal } from "../modal/Modal"
import CustomInput from '../utils/inputs/CustomInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type IPropAddNote = {
    isOpen: boolean;
    handleClose: () => void
}

export default function ModalAddNote({ isOpen, handleClose }: IPropAddNote) {

    return (
        <CustomModal.Root
            isOpen={isOpen}
            handleClose={handleClose}
            className='h-auto w-[30%]' >

            <>
                <CustomModal.CloseButton closeModal={handleClose} />
                <Box >
                    <div className="flex flex-col gap-7 p-4">

                        <Typography variant='h1' fontSize="2rem" alignSelf="center" >
                            Adicionar Nota
                        </Typography>

                        <TextField
                            hiddenLabel
                            variant='outlined'
                        />

                        <TextField
                            hiddenLabel
                            multiline
                            rows={4}
                            variant="outlined"
                        />

                        <div className='flex gap-20'>
                            <CustomInput title="teste" type='date' />
                            <CustomInput IconLeft={AccessTimeIcon} title="teste" type='time' />
                        </div>

                        <div className='flex gap-2 self-center'>
                            <Button variant="outlined">Cancelar</Button>
                            <Button color="primary" variant="contained">Salvar</Button>
                        </div>



                    </div>
                </Box>
            </>
        </CustomModal.Root>
    );
};
