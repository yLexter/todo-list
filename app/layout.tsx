import ContextProvider from "@/contexts/ContextProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutProvider from "./LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "ToDo List",
   description: "O melhor gerenciador de tarefas",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className="w-screen h-screen">
            <ContextProvider>{children}</ContextProvider>
         </body>
      </html>
   );
}
