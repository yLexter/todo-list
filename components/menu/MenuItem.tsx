import React from "react";
import { IconType } from "react-icons";

type PropMenuItem = {
   label: string;
   Icon: IconType;
   href?: string;
   onClick?: () => void;
};

export default function MenuItem({ label, Icon, href, onClick }: PropMenuItem) {
   return (
      <button>
         <Icon />

         <span className="font-normal block text-base tracking-wider font-cb">
            {label}
         </span>
      </button>
   );
}
