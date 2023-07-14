import React from 'react';
import { INote } from '../../tsUtils/interfaces';
import Note from '../utils/Note';

interface PropNotes {
    notes: INote[]
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

    return (
        <div>
            <h1>Anotações</h1>

            <div className='flex flex-wrap'>
                {examplesNotes.map(note => <Note key={note.id} note={note} />)}
            </div>


        </div>
    );
};
