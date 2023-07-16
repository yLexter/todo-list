import React, { memo, useState } from 'react';
import { INote } from '../../../tsUtils/interfaces';
import Note from './Note';
import TitleOption from '../utils/TitleOption';
import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';

interface PropNotes {
    notes: INote[]
}

const ButtonAddNote = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => {

    return (
        <Box
            sx={{
                width: "30%",
                heigth: "384px",
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgb(255, 255, 255, 0.2)"
            }}
        >
            <IconButton
                onClick={onClick}
                sx={{
                    width: "100%"
                }}
            >
                <AddIcon sx={{
                    width: "30%",
                    height: "30%"
                }} />
            </IconButton>
        </Box>

    )

}

const ModalAddNote = ({ openModal, closeModal }: { openModal: true, closeModal: () => void }) => {

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
            sx={{
                display: "grid",
                placeItems: "center"
            }}
        >

            <Box
                sx={{
                    width: "30%",
                    height: "80vh",
                    backgroundColor: "white",

                }}
            >

                <div className=''>

                    <IconButton onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>

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

                </div>



            </Box>

        </Modal>

    )


}


export default function Notes({ notes }: PropNotes) {

    const [openModal, setOpenModal] = useState(false)

    const handleClose = () => {
        setOpenModal(false)
    }

    const handleOpen = () => {
        setOpenModal(true)
    }

    const examplesNotes: INote[] = [
        {
            title: "sexo",
            description: "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
            id: "???kj"
        },
        {
            title: "sexo",
            description: "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
            id: "???v"
        },
        {
            title: "sexo",
            description: "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
            id: "???d"
        },
        {
            title: "sexo",
            description: "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
            id: "???s"
        },
        {
            title: "sexo",
            description: "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
            id: "???z"
        },
    ];

    return (
        <div className='col-span-9'>
            <TitleOption title='Anotações' />

            <div className='flex flex-wrap gap-2 p-4'>
                {examplesNotes.map(note => <Note key={note.id} note={note} />)}
                <ButtonAddNote onClick={e => handleOpen()} />
            </div>

            {openModal && <ModalAddNote
                openModal={openModal}
                closeModal={handleClose}
            />}

        </div>
    );
};

