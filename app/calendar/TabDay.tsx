import { Utils } from "@/entities/classes";
import { ITask } from "@/entities/interfaces";
import React from "react";

interface IPropTabDay {
   tasks: ITask[];
}

const TaskComponent = ({ task }: { task: ITask }) => {
   return (
      <div className="flex justify-between items-center mb-4">
         <div className="self-center">{Utils.getTimeFormatted(task.date)}</div>

         <div
            style={{ backgroundColor: Utils.getRandomColor() }}
            className="w-11/12 p-3 rounded-md"
         >
            <p>{task.content}</p>
         </div>
      </div>
   );
};

export default function TabDay({ tasks }: IPropTabDay) {
   return (
      <>
         {tasks.map((task) => (
            <TaskComponent key={task.id} task={task} />
         ))}
      </>
   );
}
