"use client";

import { IUser } from "@/entities";
import { redirect } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";

interface IAuthenticateContext {
   user: IUser | null;
   authenticateUser: () => void;
   logout: () => void;
}

const AuthenticateContext = createContext({} as IAuthenticateContext);

export const AuthenticateProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<IUser | null>({
      name: "??",
      password: "?",
      tasks: [],
      notes: [],
   });

   const authenticateUser = () => {
      setUser({
         name: "??",
         password: "?",
         tasks: [],
         notes: [],
      });
   };

   const logout = () => {
      setUser(null);
   };

   return (
      <AuthenticateContext.Provider value={{ user, authenticateUser, logout }}>
         {children}
      </AuthenticateContext.Provider>
   );
};

export const useAuthenticateContext = () => useContext(AuthenticateContext);
