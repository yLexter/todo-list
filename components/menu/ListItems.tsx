import React, { ReactNode } from "react";
import TitleMenu from "./TitleMenu";

type IPropListItems = {
   children: ReactNode;
   text?: string;
};

export default function ListItems({ children, text }: IPropListItems) {
   return (
      <div className="flex justify-start flex-col gap-4 w-full h-auto mb-2 p-1">
         {text && <TitleMenu text={text} />}
         <div>{children}</div>
      </div>
   );
}
