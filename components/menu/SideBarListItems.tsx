import React, { ReactNode } from "react";
import { SideBarTitle } from "./SideBarTitle";
import { cn } from "@/lib/utils";

type IPropListItems = {
   children: ReactNode;
   text?: string;
   className?: string;
};

export function SideBarListOptions({
   children,
   text,
   className,
}: IPropListItems) {
   return (
      <div
         className={cn(
            "flex justify-start flex-col gap-4 w-full h-auto p-1",
            className
         )}
      >
         {text && <SideBarTitle text={text} />}
         <div>{children}</div>
      </div>
   );
}
