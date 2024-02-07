import React from "react";
import Header from "./Header";
import TaskMenu from "./TaskMenu";
import Settings from "./Settings";
import Lists from "./Lists";
import { twMerge } from "tailwind-merge";
import { Separator } from "../ui/separator";

interface PropMainMenu {}

export default function MainMenu({}: PropMainMenu) {
   return (
      <aside className={twMerge("col-span-3 flex flex-col p-4 h-screen w-1/4")}>
         <Header />
         <Separator className="mb-4" />

         <TaskMenu />
         <Separator className="mb-4" />

         <Lists />
         <Separator className="mb-4" />
         <Settings />
      </aside>
   );
}
