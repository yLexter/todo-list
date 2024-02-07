"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type IPropContextProvider = {
   children: React.ReactNode;
};

export default function ContextProvider({ children }: IPropContextProvider) {
   return <SessionProvider>{children}</SessionProvider>;
}
