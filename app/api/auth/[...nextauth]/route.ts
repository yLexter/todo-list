import { IUser, global } from "@/entities";
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
            const {
               constants: {
                  routes: { baseUrl },
                  routesApi: { signIn },
               },
            } = global;

            const response = await fetch(`${baseUrl}${signIn}`, {
               method: "POST",
               body: JSON.stringify({
                  email: credentials?.username,
                  password: credentials?.password,
               }),
            });

            const user = await response.json();

            return user as IUser;
         },
      }),
   ],
   pages: {
      signIn: global.constants.routes.signIn,
   },
};

export const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST, NextAuthOptions };
