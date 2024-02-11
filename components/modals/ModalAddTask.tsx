"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const schema = z.object({
   description: z.string().nonempty("A descrição é obrigatória."),
   time: z
      .string()
      .regex(/^\d{2}:\d{2}$/, "Por favor, insira um horário válido (HH:mm)."),
   dayOfWeek: z.enum([
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
      "Domingo",
   ]),
});

type TModalAddTask = {
   className?: string;
   children: React.ReactNode;
};

type TTaskSchema = z.infer<typeof schema>;

export default function ModalAddTask({ className, children }: TModalAddTask) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TTaskSchema>({
      resolver: zodResolver(schema),
   });

   const onSubmit = (data: TTaskSchema) => {
      console.log(data);
   };

   return (
      <Dialog>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={className}>
            <DialogHeader>
               <DialogTitle>Adicionar uma Task</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col gap-y-2 mb-4">
                  <Label htmlFor="description">Descrição</Label>
                  <Input id="description" {...register("description")} />
                  {errors.description && (
                     <span>{errors.description.message}</span>
                  )}
               </div>
               <div className="flex flex-col gap-y-2 mb-4">
                  <Label htmlFor="time">Horário</Label>
                  <Input id="time" type="time" {...register("time")} />
                  {errors.time && <span>{errors.time.message}</span>}
               </div>

               <div className="flex flex-col gap-y-2 mb-4">
                  <Label htmlFor="dayOfWeek">Dia da Semana</Label>

                  <select id="dayOfWeek" {...register("dayOfWeek")}>
                     <option disabled value="">
                        Selecione Um Dia...
                     </option>
                     <option value="Segunda-feira">Segunda-feira</option>
                     <option value="Terça-feira">Terça-feira</option>
                     <option value="Quarta-feira">Quarta-feira</option>
                     <option value="Quinta-feira">Quinta-feira</option>
                     <option value="Sexta-feira">Sexta-feira</option>
                     <option value="Sábado">Sábado</option>
                     <option value="Domingo">Domingo</option>
                  </select>
                  {errors.dayOfWeek && <span>{errors.dayOfWeek.message}</span>}
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
   );
}
