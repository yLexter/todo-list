import { repository } from "@/app/api/(backend)";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
   const { id } = req.body;

   try {
      const user = await repository.db.user.getUserById(id);

      return NextResponse.json({ tasks: user }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { user } = req.body;

   try {
      await repository.db.user.createUser(user);

      return NextResponse.json(
         { message: "Sucesso ao criar novo user" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
   const { userId, user } = req.body;

   try {
      await repository.db.user.uptadeUser(userId, user);

      return NextResponse.json(
         { message: "Sucesso ao atualizar nova task" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
   const { id } = req.body;

   try {
      await repository.db.user.deleteUser(id);

      return NextResponse.json(
         { message: "Sucesso ao deletar task" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}
