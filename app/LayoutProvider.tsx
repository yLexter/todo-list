import LoginScreen from "@/app/auth/signIn/page";
import MainMenu from "@/components/menu/MainMenu";
import React from "react";
import { redirect } from "next/navigation";

type IPropLaoutProvider = {
   children: React.ReactNode;
};

export default function LayoutProvider({ children }: IPropLaoutProvider) {
   return (
      <div className="flex w-full h-full">
         <MainMenu />
         {children}
      </div>
   );
}
