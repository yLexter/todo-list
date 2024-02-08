import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type TOptionBase = {
   label: string;
   Icon: IconType;
};

function Option() {}

Option.Link = function ({ label, Icon, href }: TOptionBase & { href: string }) {
   return (
      <Link href={href} className="flex items-center gap-x-2 w-full mb-4">
         <Icon size={25} />
         <span>{label}</span>
      </Link>
   );
};

Option.Button = function ({
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
};

export { Option };
