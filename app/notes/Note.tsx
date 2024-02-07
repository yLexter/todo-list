import React from "react";
import { INote } from "../../entities/interfaces";
import { Utils } from "@/entities/classes";
import { twMerge } from "tailwind-merge";

interface IPropNotes {
   className?: string;
   note: INote;
}

export default function Note({ note, className }: IPropNotes) {
   return (
      <div
         className={twMerge("rounded-md p-5 shadow-lg", className)}
         style={{
            backgroundColor: Utils.getRandomColor(),
         }}
      >
         <h3 className="capitalize font-bold mb-3 text-2xl">{note.title}</h3>

         <h5 className="leading-tight text-justify font-normal">
            {note.description}{" "}
         </h5>
      </div>
   );
}
