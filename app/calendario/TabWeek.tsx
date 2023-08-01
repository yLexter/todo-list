
import { Utils } from '@/tsUtils/classes';
import { ITask } from '@/tsUtils/interfaces';
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

interface IPropTabWeek {
    tasks: ITask[]
}


export default function TabWeek({ tasks }: IPropTabWeek) {

    const timesNonRepetating = tasks.reduce((acc, task) => {
        const time = Utils.getTimeFormatted(task.date);

        if (acc.has(time)) {
            acc.get(time)?.push(task)
        } else {
            acc.set(time, [task])
        };

        return acc
    }, new Map<String, ITask[]>)

    const rows = Array.from(timesNonRepetating.entries())

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {Utils.daysOfWeek.map(day => <TableCell key={`HeadTable-${day.name}`} >{day.name}</TableCell>)}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        rows.map(([time, tasks]) => (
                            <TableRow key={`TimeTable-${time}`}>

                                <TableCell>{time}</TableCell>

                                {Utils.daysOfWeek.map(({ name, day }) => {

                                    return tasks.map(task => {

                                        if (task.date.getDay() === day)
                                            return <TableCell sx={{ backgroundColor: Utils.getRandomColor() }}>{task.content}</TableCell>

                                        return <TableCell></TableCell>
                                    })
                                })}

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
