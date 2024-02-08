import { ITask } from "@/entities";
import { Utils } from "@/entities/classes";
import React from "react";

type IPropTabWeek = {
   tasks: ITask[];
};

const TableBodyMonth = ({ tasks }: IPropTabWeek) => {
   const totalDayOfWeek = 7;
   const currentDate = new Date();
   const firstDayDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
   );
   const dayOfFirstDayDate = firstDayDate.getDay();
   const informationMonth = Utils.getMonthOfYear(
      currentDate.getFullYear(),
      currentDate.getMonth()
   );
   const totalLines = Math.ceil(
      (informationMonth.total + dayOfFirstDayDate) / totalDayOfWeek
   );
   let currentDay = 1;

   return (
      <tbody>
         {Array.from({ length: totalLines }).map((ignored, column) => (
            <tr>
               {Array.from({ length: totalDayOfWeek }).map((ignored2, day) => {
                  if (
                     (column === 0 && day < dayOfFirstDayDate - 1) ||
                     currentDay > informationMonth.total
                  )
                     return <th className="w-auto h-24"></th>;

                  return <th className="w-auto h-24">{currentDay++}</th>;
               })}
            </tr>
         ))}
      </tbody>
   );
};

export default function TabWeek({ tasks }: IPropTabWeek) {
   return (
      <table className="w-full">
         <thead>
            <tr>
               {Utils.daysOfWeek.map((day) => (
                  <th key={`HeadTableMonth-${day.name}`}>{day.name}</th>
               ))}
            </tr>
         </thead>

         <TableBodyMonth tasks={tasks} />
      </table>
   );
}
