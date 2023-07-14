import React from "react";
import LeftMenu from "./sections/MainMenu";
import Note from "./utils/Note";
import Notes from "./sections/Notes";

export default function App() {

    return (
        <div className="grid grid-cols-12 gap-4">
            <LeftMenu />
            <Notes notes={[]}/>
        </div>
    )

}