import { repository } from "@/app/api/(backend)";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
   const { id } = req.body;

   try {
      const tasks = await repository.db.tasks.getAllTasks(id);

      return NextResponse.json({ tasks: tasks }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { id, task } = req.body;

   try {
      await repository.db.tasks.createTask(id, task);

      return NextResponse.json(
         { message: "Sucesso ao criar nova task" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
   const { id, idTask, task } = req.body;

   try {
      await repository.db.tasks.updateTask(id, idTask, task);

      return NextResponse.json(
         { message: "Sucesso ao atualizar nova task" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
   const { id, idTask } = req.body;

   try {
      await repository.db.tasks.deleteTask(id, idTask);

      return NextResponse.json(
         { message: "Sucesso ao deletar task" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}
