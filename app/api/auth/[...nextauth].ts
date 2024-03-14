import { global } from "@/entities";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: AuthOptions = {
   providers: [
      CredentialsProvider({
         id: "credentials",
         name: "credentials",
         credentials: {
            username: {
               type: "text",
               placeholder: "username",
            },
            password: {
               type: "password",
               placeholder: "password",
            },
         },

         async authorize(credentials, req) {
            const user = { id: "1", name: "ali", password: "ali123" };

            return user;
         },
      }),
   ],
};

export default NextAuth(nextAuthOptions);
