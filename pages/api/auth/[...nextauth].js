import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    // ...add custom callbacks here
    async session({ session, token }) {
      // @ts-ignore
      session.user.tag = session.user.name.split(' ').join('').toLowerCase()

      // @ts-ignore
      session.user.uid = token.sub
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
})
