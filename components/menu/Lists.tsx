import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "./MenuItem";
import ListItems from "./ListItems";
import { IoIosAdd } from "react-icons/io";

type IPropLists = {};

export default function Lists({}: IPropLists) {
   return (
      <ListItems text="Listas">
         <MenuItem onClick={() => {}} Icon={IoIosAdd} label="Adicionar Lista" />
      </ListItems>
   );
}
