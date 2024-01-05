import { ITask } from "@/entities";
import { Utils } from "@/entities/classes";
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from "@mui/material";
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
      <TableBody>
         {[...Array(totalLines)].map((ignored, column) => (
            <TableRow>
               {[...Array(totalDayOfWeek)].map((ignored2, day) => {
                  if (
                     (column === 0 && day < dayOfFirstDayDate - 1) ||
                     currentDay > informationMonth.total
                  )
                     return <TableCell></TableCell>;

                  return <TableCell>{currentDay++}</TableCell>;
               })}
            </TableRow>
         ))}
      </TableBody>
   );
};

export default function TabWeek({ tasks }: IPropTabWeek) {
   return (
      <TableContainer>
         <Table>
            <TableHead>
               <TableRow>
                  {Utils.daysOfWeek.map((day) => (
                     <TableCell key={`HeadTableMonth-${day.name}`}>
                        {day.name}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>

            <TableBodyMonth tasks={tasks} />
         </Table>
      </TableContainer>
   );
}
