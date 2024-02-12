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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { global } from "@/entities";

type IPropAddNote = {
   children: React.ReactNode;
   classTigger?: string;
};

const schema = z.object({
   title: z.string().nonempty("O título é obrigatório."),
   description: z.string().nonempty("A descrição é obrigatória."),
   schedule: z
      .string()
      .regex(/^\d{2}:\d{2}$/, "Por favor, insira um horário válido (HH:mm)."),
   date: z.date().refine((date) => date <= new Date(), {
      message: "A data precisa estar no futuro.",
   }),
});

type FormData = z.infer<typeof schema>;

export default function ModalAddNote({ children, classTigger }: IPropAddNote) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(schema),
   });

   const onSubmit = (data: FormData) => {
      fetch(global.constants.routesApi.note, {
         method: "POST",
         body: JSON.stringify({
            id: "?",
            task: data,
         }),
      });
   };

   return (
      <>
         <Dialog>
            <DialogTrigger className={classTigger}>{children}</DialogTrigger>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Adicionar uma Nota</DialogTitle>
               </DialogHeader>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="title">Título</Label>
                     <Input id="title" {...register("title")} />
                     {errors.title && <span>{errors.title.message}</span>}
                  </div>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="description">Descrição</Label>
                     <Input id="description" {...register("description")} />
                     {errors.description && (
                        <span>{errors.description.message}</span>
                     )}
                  </div>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="date">Data</Label>
                     <Input id="date" type="date" {...register("date")} />
                     {errors.date && <span>{errors.date.message}</span>}
                  </div>
                  <div className="flex flex-col gap-y-2 mb-4">
                     <Label htmlFor="schedule">Horário</Label>
                     <Input
                        id="schedule"
                        type="time"
                        {...register("schedule")}
                     />
                     {errors.schedule && <span>{errors.schedule.message}</span>}
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
