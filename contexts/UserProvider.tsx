"use client";

import { IUser, global } from "@/entities";
import React, { useContext, useState, createContext } from "react";

export type UserProvider = {
   data: IUser | null;
   fetchUser: (username: string) => Promise<void>;
   resetUser: () => void;
};

const UserContext = createContext({} as UserProvider);

export const UserContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [currentUser, setCurrentUser] = useState<IUser | null>(null);

   const fetchUser = async (username: string) => {
      const response = await fetch(
         global.constants.getPathTotalApi(global.constants.routesApi.user),
         { method: "GET" }
      );

      const user = (await response.json()) as IUser;

      setCurrentUser(user);
   };

   const resetUser = () => {
      setCurrentUser(null);
   };

   return (
      <UserContext.Provider
         value={{
            data: currentUser,
            fetchUser,
            resetUser,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export const useUserContext = () => useContext(UserContext);
