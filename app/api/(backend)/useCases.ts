import { prisma } from "@/prisma/lib/prisma-client";
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
   async createTask(idUser: string, task: ITask): Promise<void> {
      await prisma.task.create({
         data: task,
      });
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
   async authenticate(email: string, senha: string): Promise<IUser> {
      const user = await prisma.user.findFirst({
         where: { email: email, password: senha },
         include: { notes: true, tasks: true, task_categories: true },
      });

      if (!user) {
         throw new Error("User not found");
      }

      return user;
   }

   async getUsers(): Promise<IUser[]> {
      return await prisma.user.findMany({
         include: { notes: true, tasks: true, task_categories: true },
      });
   }
   async getUserById(idUser: string): Promise<IUser | null> {
      const user = prisma.user.findFirst({
         where: { id: idUser },
         include: { notes: true, tasks: true, task_categories: true },
      });

      if (!user) {
         throw new Error("User not found");
      }

      return user;
   }
   async createUser(user: IUser): Promise<IUser> {
      const newUser = await prisma.user.create({
         data: {
            email: user.email,
            name: user.name,
            password: user.password,
         },
      });

      return {
         ...newUser,
         notes: [],
         task_categories: [],
         tasks: [],
      };
   }
   async uptadeUser(idOldUser: string, newUser: IUser): Promise<void> {
      await prisma.user.update({
         where: { id: idOldUser },
         data: {
            email: newUser.email,
            name: newUser.name,
            password: newUser.password,
         },
      });
   }
   async deleteUser(idUser: string): Promise<void> {
      await prisma.user.delete({ where: { id: idUser } });
   }
}

export class SQLNotesManager implements INoteManager {
   async createNote(idUser: string, note: INote): Promise<void> {
      await prisma.note.create({
         data: {
            userId: idUser,
            title: note.title,
            description: note.description,
         },
      });
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
