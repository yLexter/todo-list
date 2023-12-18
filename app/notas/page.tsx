"use client";

import React, { useState } from "react";
import { INote } from "./../../tsUtils";
import Note from "./Note";
import TitleOption from "../../components/utils/UI/TitleOption";
import AddNote from "./../../components/modals/ModalAddNote";
import ButtonAddNote from "./ButtonAddNote";
import ModalAddNote from "./../../components/modals/ModalAddNote";
import { useAuthenticateContext } from "@/contexts";
import { redirect } from "next/navigation";
import LayoutProvider from "../LayoutProvider";

interface PropNotes {}

export default function Notes({}: PropNotes) {
   const { user } = useAuthenticateContext();

   if (!user) redirect("/login");

   const [openModal, setOpenModal] = useState(false);

   const handleClose = () => {
      setOpenModal(false);
   };

   const handleOpen = () => {
      setOpenModal(true);
   };

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
         <div className="col-span-9">
            <TitleOption title="Anotações" />

            <div className="flex flex-wrap gap-2 p-4">
               {examplesNotes.map((note) => (
                  <Note key={note.id} note={note} />
               ))}
               <ButtonAddNote onClick={(e) => handleOpen()} />
            </div>

            <ModalAddNote handleClose={handleClose} isOpen={openModal} />
         </div>
      </LayoutProvider>
   );
}
