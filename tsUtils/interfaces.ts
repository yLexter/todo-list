export interface INote {
    id: string
    title: string;
    description: string
}

export interface ITask {
    id: string
    date: Date
    content: string
}

export interface IUser {
    name: string;
    password: string;
    notes: INote[]
    tasks: ITask[]
}