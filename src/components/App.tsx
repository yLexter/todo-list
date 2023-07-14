import React from "react";
import LeftMenu from "./menu/LeftMenu";
import MenuItem from "./menu/MenuItem";
import SearchIcon from "@mui/icons-material/Search"

export default function App() {

    return (
        <>
            <LeftMenu />
            <MenuItem
                label="Sexo"
                Icon={SearchIcon}
            />
        </>
    )

}