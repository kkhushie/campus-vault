import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


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
    async signIn({ user }) {
      if (!user?.email) {
        console.log("No email returned from provider");
        return false;
      }
    
      const allowedDomains = ["dau.ac.in", "daiict.ac.in"];
      const domain = user.email.split("@")[1];
    
      return allowedDomains.includes(domain);
    },
    

    async session({ session }) {
      console.log("LOGGED IN EMAIL:", session?.user?.email);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
