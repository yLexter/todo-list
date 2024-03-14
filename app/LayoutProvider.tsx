import LoginScreen from "@/app/signIn/page";
import MainMenu from "@/components/menu/MainMenu";
import React from "react";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

type IPropLaoutProvider = {
   children: React.ReactNode;
   className?: string;
};

export default function LayoutProvider({
   children,
   className,
}: IPropLaoutProvider) {
   return (
      <main className="flex w-full h-full">
         <div className="w-1/5 h-full"></div>
         <MainMenu />
         <section className={twMerge("flex-1", className)}>{children}</section>
      </main>
   );
}
