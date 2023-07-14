import React from 'react';
import { INote } from '../../tsUtils/interfaces';
import Note from '../utils/Note';
import TitleOption from '../utils/TitleOption';
import { Box, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
                placeItems: "center"
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

export default function Notes({ notes }: PropNotes) {

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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    }

    return (
        <div className='col-span-9'>
            <TitleOption title='Anotações' />

            <div className='flex flex-wrap gap-2 p-4'>
                {examplesNotes.map(note => <Note key={note.id} note={note} />)}
                <ButtonAddNote onClick={handleClick} />
            </div>



        </div>
    );
};
