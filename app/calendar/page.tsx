import React, { useState } from "react";
import TitleOption from "../../components/utils/UI/TitleOption";
import { ITask } from "@/entities/interfaces";
import TabDay from "./TabDay";
import TabWeek from "./TabWeek";
import TabMonth from "./TabMonth";
import LayoutProvider from "../LayoutProvider";
import { Button } from "@/components/ui/button";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
         date: new Date(Date.now() + 3600 * 1000 * 10 + 5 * 1000),
      },
      {
         id: "z",
         content: "task 3",
         date: new Date(Date.now() + 3600 * 1000 * 28 + 10 * 1000),
      },
   ];

   const sortedTasks = tasks.sort((a, b) => {
      const [hours1, minutes1] = [a.date.getHours(), a.date.getMinutes()];
      const [hours2, minutes2] = [b.date.getHours(), b.date.getMinutes()];

      return hours1 - hours2 || minutes1 - minutes2;
   });

   return (
      <LayoutProvider className="px-10 pt-5 bg-gray-300/70">
         <div className="flex justify-between items-center gap-2 mb-5">
            <TitleOption title={dateToString} />
            <Button>Adicionar Evento</Button>
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
