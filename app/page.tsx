import React from "react";
import Home from "./../components/home/Home";
import LayoutProvider from "./LayoutProvider";
import { useAuthenticateContext } from "@/contexts";

export default function Page() {
   return (
      <LayoutProvider>
         <Home />
      </LayoutProvider>
   );
}
