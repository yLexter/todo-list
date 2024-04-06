export interface INote {
   id: string;
   title: string;
   description: string;
   tagNote?: ITagNote;
}

export interface ITask {
   id: string;
   date: Date;
   content: string;
}

export interface ITagNote {
   name: string;
   color: string;
}

export interface IUser {
   name: string;
   password: string;
   notes: INote[];
   tasks: ITask[];
   tagsNotes: ITagNote[];
}
