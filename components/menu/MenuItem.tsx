"use client";

import { useAppThemeContext } from "@/contexts";
import { TOptionsTheme } from "@/entities";
import {
   ListItemButton,
   ListItemIcon,
   ListItemText,
   SvgIconTypeMap,
   Theme,
   Typography,
   useTheme,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Link from "next/link";
import React from "react";

type PropMenuItem = {
   label: string;
   Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
   href?: string;
   onClick?: () => void;
};

export default function MenuItem({ label, Icon, href, onClick }: PropMenuItem) {
   const { themeName, theme } = useAppThemeContext();

   if (onClick) {
      return (
         <ListItemButton onClick={() => onClick()}>
            <ListItemIcon>
               <Icon color={themeName === "dark" ? "secondary" : "primary"} />
            </ListItemIcon>

            <Typography
               className="font-normal block text-base tracking-wider font-cb"
               color={theme.palette.text.primary}
               variant="inherit"
            >
               {label}
            </Typography>
         </ListItemButton>
      );
   }

   return (
      <Link href={href || "/"}>
         <ListItemButton>
            <ListItemIcon>
               <Icon color={themeName === "dark" ? "secondary" : "primary"} />
            </ListItemIcon>

            <Typography
               className="font-normal block text-base tracking-wider font-cb"
               color={theme.palette.text.primary}
               variant="inherit"
            >
               {label}
            </Typography>
         </ListItemButton>
      </Link>
   );
}
