import { repository } from "@/app/backend";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
   const { id } = req.body;

   try {
      const tasks = await repository.db.tasks.getAllTasks(id);

      res.status(200).json({
         tasks: tasks,
      });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { id, task } = req.body;

   try {
      await repository.db.tasks.createTask(id, task);

      res.status(200).json({ message: "Sucesso ao criar nova task" });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
   const { id, idTask, task } = req.body;

   try {
      await repository.db.tasks.updateTask(id, idTask, task);

      res.status(200).json({ message: "Sucesso ao atualizar nova task" });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
   const { id, idTask } = req.body;

   try {
      await repository.db.tasks.deleteTask(id, idTask);

      res.status(200).json({ message: "Sucesso ao deletar task" });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}
