import { db } from '@/db/db';
import { users } from '@/models/userSchema';
import { and, eq } from 'drizzle-orm';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        rollNumber: { label: "Roll Number", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.rollNumber || !credentials?.password) {
          throw new Error('Please enter your Roll Number and Password');
        }

        try {
          const [user] = await db.select()
                                 .from(users)
                                 .where(and(eq(users.rollNumber, credentials.rollNumber)
                                 ,eq(users.password, credentials.password)));

          if (!user) {
            throw new Error('Invalid credentials');
          }

          return {
            id: user.rollNumber.toString(), 
            rollNumber: user.rollNumber,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
  pages: {
    error: '/auth',     // Customize your error page
    signOut: '/auth',   // Customize your sign out page
  },
  session: {
    strategy: 'jwt',
    maxAge: 30*60, // 30 session max age
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
