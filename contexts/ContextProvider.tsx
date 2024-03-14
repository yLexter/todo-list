"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./ThemeProvider";

export default function ContextProvider({
   children,
}: {
   children: React.ReactNode;
}): React.ReactNode {
   return (
      <ThemeProvider>
         <SessionProvider>{children}</SessionProvider>;
      </ThemeProvider>
   );
}
