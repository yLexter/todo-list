import { ITask } from "@/entities";
import { global } from "@/entities/classes";
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
   const informationMonth = global.utils.getMonthOfYear(
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
                  const tasksToday = tasks.filter(
                     (task) => task.date.getDate() === currentDay
                  );

                  if (
                     (column === 0 && day < dayOfFirstDayDate - 1) ||
                     currentDay > informationMonth.total
                  ) {
                     return <th className="w-auto h-24"></th>;
                  }

                  return (
                     <th className="w-auto h-24">
                        <span>{currentDay++}</span>

                        <div className="mt-auto flex flex-col gap-y-1">
                           {tasksToday.slice(0, 3).map((x) => {
                              return (
                                 <span
                                    key={`KeyAq-${x}`}
                                    className="mx-auto rounded-lg w-2/3 h-2"
                                    style={{
                                       backgroundColor:
                                          global.utils.getRandomColor(),
                                    }}
                                 ></span>
                              );
                           })}
                        </div>
                     </th>
                  );
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
               {global.utils.daysOfWeek.map((day) => (
                  <th key={`HeadTableMonth-${day.name}`}>{day.name}</th>
               ))}
            </tr>
         </thead>

         <TableBodyMonth tasks={tasks} />
      </table>
   );
}
