import React from "react";
import { INote } from "../../tsUtils/interfaces";
import { Utils } from "@/tsUtils/classes";
import { Typography, useTheme } from "@mui/material";
import { twMerge } from "tailwind-merge";

interface IPropNotes {
   className?: string;
   note: INote;
}

export default function Note({ note, className }: IPropNotes) {
   const theme = useTheme();

   return (
      <div
         className={twMerge("rounded-md p-5 shadow-lg", className)}
         style={{
            backgroundColor: Utils.getRandomColor(),
         }}
      >
         <h3 className="capitalize font-bold mb-3 text-2xl">{note.title}</h3>

         <Typography
            color={theme.palette.text.primary}
            className="leading-tight text-justify font-normal"
         >
            {note.description}{" "}
         </Typography>
      </div>
   );
}
