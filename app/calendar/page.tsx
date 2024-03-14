"use client";

import React from "react";
import TitleOption from "../../components/ui/utils/TitleOption";
import { ITask } from "@/entities/interfaces";
import TabDay from "./TabDay";
import TabWeek from "./TabWeek";
import TabMonth from "./TabMonth";
import LayoutProvider from "../LayoutProvider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModallAddTask from "@/components/modals/ModalAddTask";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { global } from "@/entities";

interface IPropCalendar {}

export default function Page({}: IPropCalendar) {
   const todayDate = new Date();
   const dateToString = todayDate.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
   });

   const tasks: ITask[] = [
      {
         id: "a",
         content: "task1",
         date: new Date(),
      },
      {
         id: "y",
         content: "task 2",
         date: new Date(Date.now() + 3600 * 1000 * 10 + 50 * 1000),
      },
      {
         id: "za",
         content: "task 4",
         date: new Date(Date.now() + 3600 * 1000 * 28 + 1000 * 1000),
      },
      {
         id: "za",
         content: "task 5",
         date: new Date(Date.now() + 3600 * 1000 * 28 + 10 * 1000),
      },
      {
         id: "za",
         content: "task 6",
         date: new Date(Date.now() + 3600 * 1000 * 28 + 100 * 1000),
      },
   ];

   const sortedTasks = tasks.sort((a, b) => {
      const [hours1, minutes1] = [a.date.getHours(), a.date.getMinutes()];
      const [hours2, minutes2] = [b.date.getHours(), b.date.getMinutes()];

      return hours1 - hours2 || minutes1 - minutes2;
   });

   return (
      <LayoutProvider className="px-10 pt-5 ">
         <div className="flex justify-between items-center gap-2 mb-5">
            <TitleOption title={dateToString} />

            <ModallAddTask>
               <Button>Adicionar Evento</Button>
            </ModallAddTask>
         </div>

         <Tabs defaultValue="day" className="w-full">
            <TabsList>
               <TabsTrigger value="day">Dia</TabsTrigger>
               <TabsTrigger value="week">Semana</TabsTrigger>
               <TabsTrigger value="month">Mês</TabsTrigger>
            </TabsList>

            <TabsContent value="day">
               <TabDay tasks={sortedTasks} />
            </TabsContent>

            <TabsContent value="week">
               <TabWeek tasks={sortedTasks} />
            </TabsContent>

            <TabsContent value="month">
               <TabMonth tasks={sortedTasks} />{" "}
            </TabsContent>
         </Tabs>
      </LayoutProvider>
   );
}
