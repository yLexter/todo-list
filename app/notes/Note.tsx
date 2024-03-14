import React from "react";
import { INote } from "../../entities/interfaces";
import { global } from "@/entities/classes";
import { twMerge } from "tailwind-merge";

interface IPropNotes {
   className?: string;
   note: INote;
}

export default function Note({ note, className }: IPropNotes) {
   return (
      <div
         className={twMerge(
            "relative rounded-md px-5 py-4 shadow-lg h-64 overflow-hidden whitespace-normal",
            className
         )}
         style={{
            backgroundColor: global.utils.getRandomColor(),
         }}
      >
         <h3 className="capitalize font-bold mb-2 text-2xl">{note.title}</h3>

         <h5 className="text-ellipsis leading-tight text-justify font-normal">
            {note.description}{" "}
         </h5>
      </div>
   );
}
