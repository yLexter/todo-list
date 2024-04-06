import { repository } from "@/app/api/(backend)";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
   const { id } = req.body;

   try {
      const notes = await repository.db.notes.getAllNotes(id);

      res.status(200).json({
         notes: notes,
      });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { id, note } = req.body;

   try {
      await repository.db.notes.createNote(id, note);

      res.status(200).json({ message: "Sucesso ao criar nova nota" });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
   const { id, idNote } = req.body;

   try {
      await repository.db.notes.deleteNote(id, idNote);

      res.status(200).json({ message: "Sucesso ao atualizar nova nota" });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
   const { id, idNote } = req.body;

   try {
      await repository.db.notes.deleteNote(id, idNote);

      res.status(200).json({ message: "Sucesso ao deletar nota" });
   } catch (error) {
      res.status(400).json({ message: `Error: ${error}` });
   }
}
