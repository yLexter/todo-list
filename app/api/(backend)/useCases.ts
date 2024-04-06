import {
   IDataRepository,
   INote,
   INoteManager,
   ITask,
   ITaskManager,
   IUser,
   IUserRepository,
} from ".";

export class SQLTaskManager implements ITaskManager {
   createTask(idUser: string, task: ITask): Promise<void> {
      throw new Error("Method not implemented.");
   }
   getTaskById(idUser: string, idTask: string): Promise<ITask | undefined> {
      throw new Error("Method not implemented.");
   }
   getAllTasks(idUser: string): ITask[] {
      throw new Error("Method not implemented.");
   }
   updateTask(
      idUser: string,
      idTask: string,
      updatedTask: ITask
   ): Promise<void> {
      throw new Error("Method not implemented.");
   }
   deleteTask(idUser: string, idTask: string): Promise<void> {
      throw new Error("Method not implemented.");
   }
}

export class SQLUserManager implements IUserRepository {
   getUsers(): Promise<IUser[]> {
      throw new Error("Method not implemented.");
   }
   getUserById(idUser: string): Promise<IUser | undefined> {
      throw new Error("Method not implemented.");
   }
   createUser(user: IUser): Promise<void> {
      throw new Error("Method not implemented.");
   }
   uptadeUser(idOldUser: string, newUser: IUser): Promise<void> {
      throw new Error("Method not implemented.");
   }
   deleteUser(idUser: string): Promise<void> {
      throw new Error("Method not implemented.");
   }
}

export class SQLNotesManager implements INoteManager {
   createNote(idUser: string, note: INote): Promise<void> {
      throw new Error("Method not implemented.");
   }
   getNoteById(idUser: string, idNote: string): Promise<INote | undefined> {
      throw new Error("Method not implemented.");
   }
   getAllNotes(idUser: string): Promise<INote[]> {
      throw new Error("Method not implemented.");
   }
   updateNote(
      idUser: string,
      idNote: string,
      updatedNote: INote
   ): Promise<void> {
      throw new Error("Method not implemented.");
   }
   deleteNote(idUser: string, idNote: string): Promise<void> {
      throw new Error("Method not implemented.");
   }
}

export class SQLRepository implements IDataRepository {
   constructor(
      public readonly tasks: ITaskManager,
      public readonly notes: INoteManager,
      public readonly user: IUserRepository
   ) {}
}
