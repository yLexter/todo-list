"use client";

import React, { useState } from "react";
import { INote } from "../../entities";
import Note from "./Note";
import TitleOption from "../../components/utils/UI/TitleOption";
import AddNote from "../../components/modals/ModalAddNote";
import ModalAddNote from "../../components/modals/ModalAddNote";
import { redirect } from "next/navigation";
import LayoutProvider from "../LayoutProvider";
import { IoIosAdd } from "react-icons/io";

interface PropNotes {}

export default function Notes({}: PropNotes) {
   const examplesNotes: INote[] = [
      {
         title: "sexo",
         description:
            "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
         id: "???kj",
      },
      {
         title: "sexo",
         description:
            "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
         id: "???v",
      },
      {
         title: "sexo",
         description:
            "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
         id: "???d",
      },
      {
         title: "sexo",
         description:
            "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
         id: "???s",
      },
      {
         title: "sexo",
         description:
            "Em um universo de milhões de estudantes, alguns deles conseguem o sonho da nota máxima na redação do Exame Nacional do Ensino Médio (Enem). A baiana Laiane Carvalho, 19 anos, foi uma delas. No ano passado, ela recebeu nota mil na prova de redação. Pelo fato de o exame ter um modelo muito específico, Laiane alerta os candidatos que participarão da edição de 2016 a ler as redações nota mil de edições anteriores. ",
         id: "???z",
      },
   ];

   return (
      <LayoutProvider>
         <TitleOption title="Anotações" />

         <div className="grid grid-cols-6 gap-2 p-4">
            {examplesNotes.map((note) => (
               <Note className="col-span-2" key={note.id} note={note} />
            ))}
            <ModalAddNote classTigger="flex items-center justify-center col-span-2">
               <IoIosAdd className="w-2/3 h-2/3" />
            </ModalAddNote>
         </div>
      </LayoutProvider>
   );
}
