"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Separator } from "../ui/separator";
import { FaRegStickyNote, FaRegCalendarAlt, FaMoon } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiLogout, CiSun } from "react-icons/ci";
import { SideBarListOptions } from "./SideBarListItems";
import { IoIosAdd } from "react-icons/io";
import { SideBarOptionButton, SideBarOptionLink } from "./SideBarOption";
import SearchBar from "../ui/utils/SearchBar";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { ITagNote } from "@/entities";

interface PropMainMenu {}

const tagNotesExample: ITagNote[] = [
   {
      name: "Projeto",
      color: "rgb(33, 150, 243)",
   },
   {
      name: "Trabalho",
      color: "rgb(244, 67, 54)",
   },
   {
      name: "Escola",
      color: "rgb(76, 175, 80)",
   },
];

export default function MainMenu({}: PropMainMenu) {
   const { theme, setTheme } = useTheme();

   const handleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };

   return (
      <aside
         className={twMerge(
            "fixed top-0 left-0 flex flex-col p-4 border-l-2 border-border border-solid w-1/5 h-screen"
         )}
      >
         <header className="h-1/6 mb-0.5">
            <div className="flex items-center justify-between gap-5 mb-4">
               <h1 className="font-bold tracking-wide text-lg">Menu</h1>
            </div>

            <SearchBar
               placeholder="Digite sua pesquisa aqui..."
               className="w-full h-12 text-sm"
            />
            <Separator className="mb-4" />
         </header>

         <SideBarListOptions text="Tarefas">
            <SideBarOptionLink
               href={"/notes"}
               label="Notas"
               Icon={FaRegStickyNote}
            />
            <SideBarOptionLink
               href={"/calendar"}
               label="Calendário"
               Icon={FaRegCalendarAlt}
            />
            <Separator className="mb-4" />
         </SideBarListOptions>

         <SideBarListOptions text="Listas">
            {tagNotesExample.map((tag) => {
               return (
                  <div
                     key={`Tag-${tag.name}`}
                     className="w-full flex items-center gap-x-2 mb-2"
                  >
                     <div
                        style={{ backgroundColor: tag.color }}
                        className="h-3 w-3 rounded-lg"
                     ></div>
                     <span>{tag.name}</span>
                     <span className="ml-auto font-semibold">2</span>
                  </div>
               );
            })}

            <SideBarOptionButton
               onClick={() => {}}
               Icon={IoIosAdd}
               label="Adicionar Lista"
            />
            <Separator className="mb-4" />
         </SideBarListOptions>

         <SideBarListOptions className="mt-auto self-end" text="Configurações">
            <SideBarOptionButton
               onClick={handleTheme}
               Icon={theme !== "light" ? MdOutlineLightMode : FaMoon}
               label={theme !== "light" ? "Claro" : "Escuro"}
            />

            <SideBarOptionButton
               onClick={() => {}}
               Icon={HiMenuAlt3}
               label="Configurações"
            />
            <SideBarOptionButton
               onClick={() => {}}
               Icon={CiLogout}
               label="Sair"
            />
         </SideBarListOptions>
      </aside>
   );
}
