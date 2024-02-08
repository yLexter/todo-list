import React from "react";
import { twMerge } from "tailwind-merge";
import { Separator } from "../ui/separator";
import { FaRegStickyNote, FaRegCalendarAlt } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import ListItems from "./ListItems";
import { IoIosAdd } from "react-icons/io";
import { Option } from "./Option";

interface PropMainMenu {}

export default function MainMenu({}: PropMainMenu) {
   return (
      <aside
         className={twMerge(
            "flex flex-col p-4 border-l-2 border-border border-solid w-1/5 h-full"
         )}
      >
         <header className="h-1/6 mb-0.5">
            <div className="flex items-center justify-between gap-5 mb-4">
               <h1 className="font-bold tracking-wide text-lg">Menu</h1>
            </div>
         </header>

         <Separator className="mb-4" />

         <ListItems text="Tarefas">
            <Option.Link href={"/notes"} label="Notas" Icon={FaRegStickyNote} />
            <Option.Link
               href={"/calendar"}
               label="Calendário"
               Icon={FaRegCalendarAlt}
            />
         </ListItems>
         <Separator className="mb-4" />

         <ListItems text="Listas">
            <Option.Button
               onClick={() => {}}
               Icon={IoIosAdd}
               label="Adicionar Lista"
            />
         </ListItems>
         <Separator className="mb-4" />

         <ListItems text="Configurações">
            <Option.Button
               onClick={() => {}}
               Icon={HiMenuAlt3}
               label="Configurações"
            />
            <Option.Button onClick={() => {}} Icon={CiLogout} label="Sair" />
         </ListItems>
      </aside>
   );
}
