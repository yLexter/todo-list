import React from "react";

interface IPropTitleOption {
   title: string;
}

export default function TitleOption({ title }: IPropTitleOption) {
   return (
      <h6 className="font-bold capitalize tracking-[0.1rem] text-4xl m-2">
         {title}
      </h6>
   );
}
