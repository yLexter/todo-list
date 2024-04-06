import {
   IDataRepository,
   SQLNotesManager,
   SQLRepository,
   SQLTaskManager,
   SQLUserManager,
} from ".";

const taskManager = new SQLTaskManager();
const userManager = new SQLUserManager();
const notesManager = new SQLNotesManager();
const randomRepository = new SQLRepository(
   taskManager,
   notesManager,
   userManager
);

class DataRepository {
   constructor(public readonly db: IDataRepository) {}
}

export const repository = new DataRepository(randomRepository);
