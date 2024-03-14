import { NextApiRequest, NextApiResponse } from "next";

export function POST(req: NextApiRequest, res: NextApiResponse) {
   // const { username, password } = req.body;

   /*
   if (!username || !password) {
      return NextResponse.json(
         {
            error: "Content body is Invalid",
         },
         { status: 412 }
      );
      }*/

   return res.status(200).json({
      user: {
         name: "João",
         password: "senha123",
         notes: [
            {
               id: "1",
               title: "Compras",
               description: "Lista de compras para o mercado",
            },
            {
               id: "2",
               title: "Ideias",
               description: "Algumas ideias para projetos futuros",
            },
         ],
         tasks: [
            {
               id: "1",
               date: new Date(),
               content: "Reunião de trabalho",
            },
            {
               id: "2",
               date: new Date(),
               content: "Estudar programação",
            },
         ],
      },
   });
}
