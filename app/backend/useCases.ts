import {
   IDataRepository,
   INoteManager,
   ITaskManager,
   IUserRepository,
} from "./";

export class DataRepository implements IDataRepository {
   constructor(
      public readonly tasks: ITaskManager,
      public readonly notes: INoteManager,
      public readonly user: IUserRepository
   ) {}
}
