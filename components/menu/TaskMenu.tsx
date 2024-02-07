import React from "react";
import MenuItem from "./MenuItem";
import ListItems from "./ListItems";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";

interface PropTaskMenu {}

export default function TaskMenu({}: PropTaskMenu) {
   return (
      <ListItems text="Tarefas">
         <MenuItem href={"/notas"} label="Notas" Icon={FaRegStickyNote} />
         <MenuItem
            href={"/calendario"}
            label="Calendário"
            Icon={FaRegCalendarAlt}
         />
      </ListItems>
   );
}
