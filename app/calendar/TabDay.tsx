import { global } from "@/entities/classes";
import { ITask } from "@/entities/interfaces";
import React from "react";

interface IPropTabDay {
   tasks: ITask[];
}

export default function TabDay({ tasks }: IPropTabDay) {
   const currentDay = new Date().getDate();

   return (
      <>
         {tasks
            .filter((task) => task.date.getDate() === currentDay)
            .map((task) => (
               <div
                  key={`Task-${task.id}`}
                  className="flex justify-between items-center mb-4"
               >
                  <div className="self-center">
                     {global.utils.getTimeFormatted(task.date)}
                  </div>

                  <div
                     style={{ backgroundColor: global.utils.getRandomColor() }}
                     className="w-11/12 p-3 rounded-md"
                  >
                     <p>{task.content}</p>
                  </div>
               </div>
            ))}
      </>
   );
}
