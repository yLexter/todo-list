import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type TOptionBase = {
   label: string;
   Icon: IconType;
};

export function SideBarOptionLink({
   label,
   Icon,
   href,
}: TOptionBase & { href: string }) {
   return (
      <Link href={href} className="flex items-center gap-x-2 w-full mb-4">
         <Icon size={25} />
         <span>{label}</span>
      </Link>
   );
}

export function SideBarOptionButton({
   label,
   Icon,
   onClick,
}: TOptionBase & { onClick: () => void }) {
   return (
      <button className="flex items-center gap-x-2 w-full mb-4">
         <Icon size={25} />
         <span>{label}</span>
      </button>
   );
}
