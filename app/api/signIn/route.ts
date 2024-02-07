import { NextApiRequest, NextApiResponse } from "next";

export default function POST(req: NextApiRequest, res: NextApiResponse) {
   const { username, password } = req.body;

   if (!username || !password) {
      return res.status(412).json({
         error: "Content body is Invalid",
      });
   }

   res.status(200).json({
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
   });
}
