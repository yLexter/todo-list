import { global } from "@/entities";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
   providers: [
      CredentialsProvider({
         name: "credentials",
         credentials: {
            username: {
               label: "",
               type: "text",
               placeholder: "username",
            },
            password: {
               label: "",
               type: "text",
               placeholder: "username",
            },
         },

         async authorize(credentials, req) {
            const res = await fetch(global.constants.routesApi.signIn, {
               method: "POST",
               body: JSON.stringify({
                  username: credentials?.username,
                  password: credentials?.password,
               }),
            });

            const user = await res.json();

            return user;
         },
      }),
   ],

   pages: {
      signIn: "/auth/signIn",
   },
});
