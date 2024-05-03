import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { repository } from "../(backend)";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { username, password } = req.body;

   if (!username || !password) {
      return NextResponse.json(
         {
            error: "Content body is Invalid",
         },
         { status: 412 }
      );
   }

   try {
      const user = await repository.db.user.authenticate(username, password);

      return NextResponse.json({ user: user }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: `${error}` }, { status: 400 });
   }
}
