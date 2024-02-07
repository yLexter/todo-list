import React from "react";
import { twMerge } from "tailwind-merge";
import { IoIosAdd } from "react-icons/io";

type IPropButtonAddNote = {
   className?: string;
};

export default function ButtonAddNote({ className }: IPropButtonAddNote) {
   return (
      <div
         className={twMerge(
            "grid place-items-center bg-[rgb(240, 240, 240, 0.2)]",
            className
         )}
      >
         <IoIosAdd />
      </div>
   );
}
