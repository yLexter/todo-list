import React from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type IPropAddNote = {
   children: React.ReactNode;
   classTigger?: string;
};

export default function ModalAddNote({ children, classTigger }: IPropAddNote) {
   return (
      <>
         <Dialog>
            <DialogTrigger className={classTigger}>{children}</DialogTrigger>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Adicionar uma Nota</DialogTitle>
               </DialogHeader>

               <form action="">
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="title">Título</Label>
                     <Input id="titçe" />
                  </div>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="description">Descrição</Label>
                     <Input id="description" />
                  </div>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="date">Data</Label>
                     <Input id="date" type="date" />
                  </div>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="schedule">Horário</Label>
                     <Input id="schedule" type="time" />
                  </div>

                  <DialogFooter>
                     <DialogTrigger asChild>
                        <Button variant="outline">Cancelar</Button>
                     </DialogTrigger>

                     <Button type="submit">Salvar</Button>
                  </DialogFooter>
               </form>
            </DialogContent>
         </Dialog>
      </>
   );
}
