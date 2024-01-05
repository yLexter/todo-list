import React from "react";
import { AppThemeProvider } from "./Theme";
import { AuthenticateProvider } from "./Authenticate";
import { SessionProvider } from "next-auth/react";

type IPropContextProvider = {
   children: React.ReactNode;
};

export default function ContextProvider({ children }: IPropContextProvider) {
   return (
      <AppThemeProvider>
         <SessionProvider>{children}</SessionProvider>
      </AppThemeProvider>
   );
}
