import React from "react";
import Home from "./../components/home/Home";
import LayoutProvider from "./LayoutProvider";
import { getServerSession } from "next-auth";
import { NextAuthOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { global } from "@/entities";

export default async function Page() {
   const session = await getServerSession(NextAuthOptions);

   if (!session) {
      redirect(
         `${global.constants.routes.baseUrl}/${global.constants.routes.signIn}`
      );
   }

   return (
      <LayoutProvider>
         <Home />
      </LayoutProvider>
   );
}
