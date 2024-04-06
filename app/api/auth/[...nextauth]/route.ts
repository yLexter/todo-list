import { global } from "@/entities";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const NextAuthOptions: AuthOptions = {
   providers: [
      CredentialsProvider({
         id: "credentials",
         name: "credentials",
         credentials: {
            username: {
               type: "text",
            },
            password: {
               type: "password",
            },
         },

         async authorize(credentials, req) {
            const user = { id: "1", name: "ali", password: "ali123" };

            return user;
         },
      }),
   ],
   pages: {
      signIn: global.constants.routes.signIn,
   },
};

export const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST, NextAuthOptions };
