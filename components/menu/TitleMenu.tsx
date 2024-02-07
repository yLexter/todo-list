import React from "react";

interface PropTitleMenu {
   text: string;
}

export default function TitleMenu({ text }: PropTitleMenu) {
   return (
      <h1 className="uppercase tracking-widest font-bold text-xs">{text}</h1>
   );
}
