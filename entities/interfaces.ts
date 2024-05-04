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
