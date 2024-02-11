export interface INote {
   id: string;
   title: string;
   description: string;
}

export interface ITask {
   id: string;
   date: Date;
   content: string;
}

export interface IUser {
   name: string;
   password: string;
   notes: INote[];
   tasks: ITask[];
}

export interface IUserRepository {
   getUsers(): IUser[];
   getUserById(id: string): IUser | undefined;
   createUser(user: IUser): void;
   uptadeUser(idOldUser: string, newUser: IUser): void;
   deleteUser(id: string): void;
}

export interface ITaskManager {
   createTask(task: ITask): void;
   getTaskById(id: string): ITask | undefined;
   getAllTasks(): ITask[];
   updateTask(id: string, updatedTask: ITask): void;
   deleteTask(id: string): void;
}

export interface INoteManager {
   createNote(note: INote): void;
   getNoteById(id: string): INote | undefined;
   getAllNotes(): INote[];
   updateNote(id: string, updatedNote: INote): void;
   deleteNote(id: string): void;
}

export interface IDataRepository {
   tasks: ITaskManager;
   notes: INoteManager;
   user: IUserRepository;
}
