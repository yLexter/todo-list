import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { repository } from "../(backend)";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { id, user } = req.body;

   try {
      const newUser = await repository.db.user.createUser(user);

      return NextResponse.json({ user: newUser }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}
