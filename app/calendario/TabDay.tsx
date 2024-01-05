import { Utils } from "@/entities/classes";
import { ITask } from "@/entities/interfaces";
import { Box } from "@mui/material";
import React from "react";

interface IPropTabDay {
   tasks: ITask[];
}

const TaskComponent = ({ task }: { task: ITask }) => {
   return (
      <Box className="h-24 w-11/12 flex gap-2 mb-4">
         <div className="w-1/12 self-center">
            {Utils.getTimeFormatted(task.date)}
         </div>

         <div
            style={{ backgroundColor: Utils.getRandomColor() }}
            className="w-11/12 p-3 rounded-md"
         >
            <p>{task.content}</p>
         </div>
      </Box>
   );
};

export default function TabDay({ tasks }: IPropTabDay) {
   return tasks.map((task) => <TaskComponent key={task.id} task={task} />);
}
