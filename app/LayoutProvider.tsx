"use client";

import LoginScreen from "@/app/login/page";
import MainMenu from "@/components/menu/MainMenu";
import { useAuthenticateContext } from "@/contexts";
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
