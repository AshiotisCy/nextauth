import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: "Angel",
      clientSecret: `${process.env.NEXT_PUBLIC_SECRET}`,
      issuer: "https://locibuddy.com/realms/AngelDemo",
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {},
  secret: process.env.NEXT_PUBLIC_SECRET,
  session:{
    strategy:"jwt"
  },
  jwt:{
    maxAge: 30*24*60*60,
  }
};

export default NextAuth(authOptions);
