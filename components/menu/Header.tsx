import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Theme } from "@mui/material";
import SearchBarMenu from "./SearchBarMenu";
import { twJoin } from "tailwind-merge";

interface PropHeader {
   theme: Theme;
}

export default function Header({ theme }: PropHeader) {
   return (
      <header className="h-1/6 mb-0.5">
         <div className="flex items-center justify-between gap-5 mb-4">
            <h1
               style={{ color: theme.palette.text.primary }}
               className={twJoin("font-bold tracking-wide text-lg")}
            >
               Menu
            </h1>

            <IconButton color="inherit" aria-label="Menu">
               <MenuIcon />
            </IconButton>
         </div>

         <SearchBarMenu />
      </header>
   );
}
