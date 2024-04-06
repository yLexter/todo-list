import MainMenu from "@/components/menu/MainMenu";
import React from "react";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { getServerSession } from "next-auth";
import { global } from "@/entities";
import { NextAuthOptions } from "./api/auth/[...nextauth]/route";

type IPropLaoutProvider = {
   children: React.ReactNode;
   className?: string;
};

export default async function LayoutProvider({
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
