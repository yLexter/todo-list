"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { twMerge } from "tailwind-merge";

type IPropSearchBar = {
   className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({ className, ...props }: IPropSearchBar) {
   const [isClicked, setIsClicked] = useState(false);

   const handleFocus = () => {
      setIsClicked(true);
   };

   const handleBlur = () => {
      setIsClicked(false);
   };

   return (
      <div
         className={twMerge(
            "flex justify-between items-center rounded-sm bg-input p-3",
            `${isClicked ? "outline outline-[0.1px] outline-primary" : ""}`,
            className
         )}
      >
         <input
            className=" bg-transparent flex-1 outline-none"
            {...props}
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
         />

         <button className="clear-none">
            <IoIosSearch className="text-primary" size={21} />
         </button>
      </div>
   );
}
