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
   getUsers(): Promise<IUser[]>;
   getUserById(idUser: string): Promise<IUser | undefined>;
   createUser(user: IUser): Promise<void>;
   uptadeUser(idOldUser: string, newUser: IUser): Promise<void>;
   deleteUser(idUser: string): Promise<void>;
}

export interface ITaskManager {
   createTask(idUser: string, task: ITask): Promise<void>;
   getTaskById(idUser: string, idTask: string): Promise<ITask | undefined>;
   getAllTasks(idUser: string): ITask[];
   updateTask(
      idUser: string,
      idTask: string,
      updatedTask: ITask
   ): Promise<void>;
   deleteTask(idUser: string, idTask: string): Promise<void>;
}

export interface INoteManager {
   createNote(idUser: string, note: INote): Promise<void>;
   getNoteById(idUser: string, idNote: string): Promise<INote | undefined>;
   getAllNotes(idUser: string): Promise<INote[]>;
   updateNote(
      idUser: string,
      idNote: string,
      updatedNote: INote
   ): Promise<void>;
   deleteNote(idUser: string, idNote: string): Promise<void>;
}

export interface IDataRepository {
   tasks: ITaskManager;
   notes: INoteManager;
   user: IUserRepository;
}
