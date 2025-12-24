import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.BACKEND_API_URL}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Erro ao autenticar");
          }

          const user = {
            id: data.user?.id || data.userId,
            name: data.user?.name || data.name || "Usuário",
            email: data.user?.email || data.email,
            accessToken: data.access_token || data.accessToken,
          };

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Executa no login e a cada requisição
      if (user) {
        token.userId = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
      }

      return token;
    },

    async session({ session, token }) {
      // Passa os dados para o cliente
      session.user = {
        id: token.userId,
        name: token.name,
        email: token.email,
      };
      session.accessToken = token.accessToken;

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
  },
};

export default NextAuth(authOptions);
