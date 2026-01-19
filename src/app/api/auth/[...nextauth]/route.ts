import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@/src/lib/prisma";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (!user?.email) return false;

      const allowedDomains = ["dau.ac.in", "daiict.ac.in"];
      const domain = user.email.split("@")[1];
      if (!allowedDomains.includes(domain)) return false;

      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          name: user.name || null,
          googleId: account?.providerAccountId || null,
        },
        create: {
          email: user.email,
          name: user.name || null,
          googleId: account?.providerAccountId || null,
        },
      });

      return true;
    },

    async session({ session }) {
      if (!session.user?.email) return session;

      // ✅ Attach DB user id to session
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { id: true },
      });

      if (dbUser) {
        session.user.id = dbUser.id;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
