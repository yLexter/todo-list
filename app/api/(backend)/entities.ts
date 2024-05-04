export interface INote {
   id: string;
   title: string;
   description: string;
}

export interface ITask {
   id: string;
   title: string;
   description: string;
   status: "TO_DO" | "DOING" | "DONE";
   createdAt: Date;
   updatedAt: Date;
   finished_at: Date | null;
   task_type_id: string | null;
   userId: string;
}

export interface IUser {
   id: string;
   email: string;
   name: string;
   password: string;
   notes: INote[];
   tasks: ITask[];
   task_categories: ITaskCategory[];
}

export interface ITaskCategory {
   id: string;
   description: string;
   color: string;
   userId: string;
}

export interface IUserRepository {
   getUsers(): Promise<IUser[]>;
   getUserById(idUser: string): Promise<IUser | null>;
   createUser(user: IUser): Promise<IUser>;
   uptadeUser(idOldUser: string, newUser: IUser): Promise<void>;
   deleteUser(idUser: string): Promise<void>;
   authenticate(email: string, senha: string): Promise<IUser>;
}

export interface ITaskManager {
   createTask(idUser: string, task: ITask): Promise<void>;
   getTaskById(idUser: string, idTask: string): Promise<ITask | undefined>;
   getAllTasks(idUser: string): Promise<ITask[]>;
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
