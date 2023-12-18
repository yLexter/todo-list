"use client";

import React, { useState } from "react";
import { INote } from "./../../tsUtils";
import Note from "./Note";
import TitleOption from "../../components/utils/UI/TitleOption";
import AddNote from "./../../components/modals/ModalAddNote";
import ButtonAddNote from "./ButtonAddNote";
import ModalAddNote from "./../../components/modals/ModalAddNote";
import { useAppThemeContext, useAuthenticateContext } from "@/contexts";
import { redirect } from "next/navigation";
import LayoutProvider from "../LayoutProvider";

interface PropNotes {}

export default function Notes({}: PropNotes) {
   const { user } = useAuthenticateContext();
   const { theme } = useAppThemeContext();

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
         <div
            style={{ backgroundColor: theme.palette.background.paper }}
            className="col-span-9 p-4"
         >
            <TitleOption title="Anotações" />

            <div className="grid grid-cols-6 gap-2 p-4">
               {examplesNotes.map((note) => (
                  <Note className="col-span-2" key={note.id} note={note} />
               ))}
               <ButtonAddNote
                  className="col-span-2"
                  onClick={(e) => handleOpen()}
               />
            </div>

            <ModalAddNote handleClose={handleClose} isOpen={openModal} />
         </div>
      </LayoutProvider>
   );
}
