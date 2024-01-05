import React from "react";
import MenuItem from "./MenuItem";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ListItems from "./ListItems";
import { useAppThemeContext } from "@/contexts";

interface PropTaskMenu {}

export default function TaskMenu({}: PropTaskMenu) {
   return (
      <ListItems text="Tarefas">
         <MenuItem href={"/notas"} label="Notas" Icon={StickyNote2Icon} />
         <MenuItem
            href={"/calendario"}
            label="Calendário"
            Icon={CalendarMonthIcon}
         />
      </ListItems>
   );
}
