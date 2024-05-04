"use client";

import { INote } from "../../entities";
import Note from "./Note";
import TitleOption from "../../components/ui/utils/TitleOption";
import ModalAddNote from "../../components/modals/ModalAddNote";
import LayoutProvider from "../LayoutProvider";
import { IoIosAdd } from "react-icons/io";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { global } from "@/entities";
import { useUserContext } from "@/contexts/UserProvider";

interface PropNotes {}

export default async function Notes({}: PropNotes) {
   const session = await getSession();

   if (!session) {
      redirect(
         `${global.constants.routes.baseUrl}/${global.constants.routes.signIn}`
      );
   }

   const { data } = useUserContext();
   const notes = data?.notes || [];

   return (
      <LayoutProvider>
         <TitleOption title="Anotações" />

         <div className="grid grid-cols-6 gap-2 p-4">
            {notes.map((note) => (
               <Note className="col-span-2" key={note.id} note={note} />
            ))}
            <ModalAddNote classTigger="flex items-center justify-center col-span-2">
               <IoIosAdd className="w-2/3 h-2/3" />
            </ModalAddNote>
         </div>
      </LayoutProvider>
   );
}
