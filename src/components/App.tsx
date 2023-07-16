import React from "react";
import LeftMenu from "./menu/MainMenu";
import Note from "./optionsMenu/Notes/Note";
import Notes from "./optionsMenu/Notes/Notes";
import Calendar from "./optionsMenu/calendar/Calendar";

export default function App() {

    return (
        <div className="grid grid-cols-12 gap-4">
            <LeftMenu />
            <Calendar/>
        </div>
    )

}