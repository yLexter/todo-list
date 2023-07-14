import React from "react";
import LeftMenu from "./menu/MainMenu";
import Note from "./utils/Note";
import Notes from "./main/Notes";

export default function App() {

    return (
        <div className="flex">
            <LeftMenu />
            <Notes notes={[]}/>
        </div>
    )

}