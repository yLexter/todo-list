"use client";

import React, { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { global } from "@/entities";
import { useRouter } from "next/navigation";

type IPropPageLogin = {};

const schema = z.object({
   username: z.string().min(1, "Este campo é obrigatório"),
   password: z.string().min(1, "Este campo é obrigatório"),
   remember: z.boolean(),
});

type FormProps = z.infer<typeof schema>;

export default function LoginScreen() {
   const router = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormProps>({ resolver: zodResolver(schema) });

   const onSubmit: SubmitHandler<FormProps> = async (data) => {
      const { username, password } = data;

      const response = await signIn("credentials", {
         username: username,
         password: password,
         redirect: false,
         callbackUrl: global.constants.routes.home,
      });

      if (!response?.error) {
         router.replace(global.constants.routes.home);
      } else {
         console.log("Login invalido");
      }
   };

   return (
      <div className="grid h-screen w-screen place-items-center bg-[#c4c0c0]">
         <form
            className="flex flex-col max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 shadow-md"
            onSubmit={handleSubmit(onSubmit)}
         >
            <h2 className="text-4xl text-black font-bold text-center">Login</h2>
            <div className="flex flex-col text-gray-800 py-2">
               <Label htmlFor="username">Usuário</Label>
               <Input
                  {...register("username")}
                  id="username"
                  className={`rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 ${
                     errors.username ? "border-red-500" : ""
                  } focus:bg-white focus:outline-none`}
                  type="text"
               />
               {errors.username && (
                  <p className="text-red-500 text-sm">
                     {errors.username.message}
                  </p>
               )}
            </div>
            <div className="flex flex-col text-gray-800 py-2">
               <Label htmlFor="password">Senha</Label>
               <Input
                  {...register("password")}
                  id="password"
                  className={`p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 ${
                     errors.password ? "border-red-500" : ""
                  } focus:bg-white focus:outline-none`}
                  type="password"
               />
               {errors.password && (
                  <p className="text-red-500 text-sm">
                     {errors.password.message}
                  </p>
               )}
            </div>
            <div className="flex justify-between items-center text-gray-800 py-2">
               <p className="text-blue-500 cursor-pointer">
                  Esqueceu sua Senha?{" "}
               </p>
               <Label htmlFor="checkbox-remember" className="flex items-center">
                  <Input
                     {...register("remember")}
                     className="mr-1 w-4 h-4"
                     type="checkbox"
                     id="checkbox-remember"
                  />{" "}
                  Manter Conectado
               </Label>
            </div>
            <Button className="self-center mt-5 w-full h-10" type="submit">
               Login
            </Button>

            <div>
               <p className="text-center mt-5">
                  Não possui uma conta?{" "}
                  <span className="text-blue-500 hover:underline cursor-pointer">
                     Cadastra-se
                  </span>{" "}
               </p>
            </div>
         </form>
      </div>
   );
}
