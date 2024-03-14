import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import ContextProvider from "@/contexts/ContextProvider";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./api/auth/[...nextauth]";

export const metadata: Metadata = {
   title: "ToDo List",
   description: "O melhor gerenciador de tarefas",
};

export const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
});

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={twMerge("", fontSans.variable)}>
            <ContextProvider>{children}</ContextProvider>
         </body>
      </html>
   );
}
