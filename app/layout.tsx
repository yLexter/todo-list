import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ContextProvider from "@/contexts/ContextProvider";
import "./globals.css";

export const metadata: Metadata = {
   title: "ToDo List",
   description: "O melhor gerenciador de tarefas",
};

export const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
});

export default function RootLayout({
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
