import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: "Angel",
      clientSecret: "M8iv5kpAwJMcl1dcPcylsSFEYlqOqTdH",
      issuer: "https://locibuddy.com/realms/AngelDemo",
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {},
  session:{
    strategy:"jwt"
  },
  jwt:{
    maxAge: 30*24*60*60,
  }
};

export default NextAuth(authOptions);
