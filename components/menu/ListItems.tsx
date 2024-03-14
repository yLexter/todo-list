import React, { ReactNode } from "react";
import TitleMenu from "./TitleMenu";
import { cn } from "@/lib/utils";

type IPropListItems = {
   children: ReactNode;
   text?: string;
   className?: string;
};

export default function ListItems({
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
         {text && <TitleMenu text={text} />}
         <div>{children}</div>
      </div>
   );
}
