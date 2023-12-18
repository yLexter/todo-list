import React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { twMerge } from "tailwind-merge";

type IPropButtonAddNote = {
   onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   className?: string;
};

export default function ButtonAddNote({
   onClick,
   className,
}: IPropButtonAddNote) {
   return (
      <div
         className={twMerge(
            "grid place-items-center bg-[rgb(240, 240, 240, 0.2)]",
            className
         )}
      >
         <IconButton onClick={onClick} sx={{ width: "100%" }}>
            <AddIcon sx={{ width: "30%", height: "30%" }} />
         </IconButton>
      </div>
   );
}
