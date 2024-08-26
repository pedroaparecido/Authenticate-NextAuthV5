import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import db from "./lib/db"
import { compareSync } from 'bcrypt-ts'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        credentials({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const email = credentials.email as string
                const password = credentials.password as string

                if (!credentials.email || !credentials.password) return null

                const user = await db.user.findUnique({
                    where: {
                        email: email,
                    }
                })

                if (!user) return null

                const comparePass = compareSync(password, user.password as string)
                
                if (comparePass) return { id: user.id, email: user.email, user: user.name }

                return null
            }
        })
  ],
})