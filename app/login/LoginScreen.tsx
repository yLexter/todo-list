"use client";

import {
   Button,
   Checkbox,
   Divider,
   FormControlLabel,
   IconButton,
   InputAdornment,
   TextField,
   Typography,
} from "@mui/material";
import React, { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "../../components/utils/inputs/CustomButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialButton from "./SocialButton";
import LockIcon from "@mui/icons-material/Lock";
import { useAuthenticateContext } from "@/contexts";
import { zodResolver } from "@hookform/resolvers/zod";

type IPropPageLogin = {};

const schema = z.object({
   username: z.string().min(1, "Este campo é obrigatório"),
   password: z.string().min(1, "Este campo é obrigatório"),
   remember: z.boolean(),
});

type FormProps = z.infer<typeof schema>;

export default function LoginScreen() {
   const { authenticateUser } = useAuthenticateContext();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormProps>({ resolver: zodResolver(schema) });

   const [showPassword, setShowPassword] = useState(false);

   const handleShowPassword = () => {
      setShowPassword((oldShowPassword) => !oldShowPassword);
   };

   const onSubmit: SubmitHandler<FormProps> = (data) => {
      authenticateUser();
   };

   return (
      <div className="grid h-screen w-screen place-items-center bg-[#c4c0c0]">
         <div className="bg-gray-800 flex flex-col justify-center w-96 h-96">
            <form
               className="max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 shadow-md"
               onSubmit={handleSubmit(onSubmit)}
            >
               <h2 className="text-4xl text-black font-bold text-center">
                  Login
               </h2>
               <div className="flex flex-col text-gray-800 py-2">
                  <label htmlFor="username">Usuário</label>
                  <input
                     {...register("username")}
                     className={`rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 ${
                        errors.username ? "border-red-500" : ""
                     } focus:bg-white focus:outline-none`}
                     type="text"
                  />
                  {errors.username && (
                     <p className="text-red-500">{errors.username.message}</p>
                  )}
               </div>
               <div className="flex flex-col text-gray-800 py-2">
                  <label htmlFor="password">Senha</label>
                  <input
                     {...register("password")}
                     className={`p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 ${
                        errors.password ? "border-red-500" : ""
                     } focus:bg-white focus:outline-none`}
                     type="password"
                  />
                  {errors.password && (
                     <p className="text-red-500">{errors.password.message}</p>
                  )}
               </div>
               <div className="flex justify-between text-gray-800 py-2">
                  <p
                     id="checkbox-remember"
                     className="text-blue-500 cursor-pointer"
                  >
                     Esqueceu sua Senha?{" "}
                  </p>
                  <label
                     htmlFor="checkbox-remember"
                     className="flex items-center"
                  >
                     <input
                        {...register("remember")}
                        className="mr-2"
                        type="checkbox"
                     />{" "}
                     Manter Conectado
                  </label>
               </div>
               <button
                  type="submit"
                  className="w-full my-5 py-2 bg-teal-500 shadow-lg hover:opacity-95 text-white font-semibold rounded-lg"
               >
                  Login
               </button>
            </form>
         </div>
      </div>
   );
}
