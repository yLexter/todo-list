import { global } from "@/entities/classes";
import { ITask } from "@/entities/interfaces";
import React from "react";

interface IPropTabWeek {
   tasks: ITask[];
}

export default function TabWeek({ tasks }: IPropTabWeek) {
   const timesNonRepetating = tasks.reduce((acc, task) => {
      const time = global.utils.getTimeFormatted(task.date);

      if (acc.has(time)) {
         acc.get(time)?.push(task);
      } else {
         acc.set(time, [task]);
      }

      return acc;
   }, new Map<String, ITask[]>());

   const rows = Array.from(timesNonRepetating.entries());

   return (
      <div className="w-full h-full">
         <table className="w-full">
            <thead>
               <tr>
                  <th></th>
                  {global.utils.daysOfWeek.map((day) => (
                     <th key={`HeadTable-${day.name}`}>{day.name}</th>
                  ))}
               </tr>
            </thead>

            <tbody>
               {rows.map(([time, tasks]) => (
                  <tr key={`TimeTable-${time}`}>
                     <th className="font-semibold">{time}</th>

                     {global.utils.daysOfWeek.map(({ name, day }) => {
                        return tasks.map((task) => {
                           if (task.date.getDay() === day)
                              return (
                                 <th
                                    className="w-24 h-24"
                                    style={{
                                       backgroundColor:
                                          global.utils.getRandomColor(),
                                    }}
                                 >
                                    {task.content}
                                 </th>
                              );

                           return <th className="w-24 h-24"></th>;
                        });
                     })}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
