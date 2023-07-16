'use client'

import React from "react";
import LeftMenu from "../components/menu/MainMenu";
import Note from "../components/optionsMenu/Notes/Note";
import Notes from "../components/optionsMenu/Notes/Notes";
import Calendar from "../components/optionsMenu/calendar/Calendar";

export default function App() {

    return (
        <div className="grid grid-cols-12 gap-4">
            <LeftMenu />
            <Calendar/>
        </div>
    )

}