"use client";

import React from "react";
import MenuItem from "./MenuItem";
import ItemList from "./ListItems";
import { CiLogout } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

interface IPropSettings {}

export default function Settings({}: IPropSettings) {
   return (
      <ItemList text="Configurações">
         <MenuItem onClick={() => {}} Icon={HiMenuAlt3} label="Configurações" />
         <MenuItem Icon={CiLogout} label="Sair" />
      </ItemList>
   );
}
