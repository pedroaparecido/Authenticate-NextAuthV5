import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import db from "./lib/db"
import { compareSync } from 'bcrypt-ts'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { Auth } from "@auth/core"
import GitHub from "@auth/core/providers/github"

export default async function handleGithub() {
  const request = new Request('http://localhost:3000/api/auth/')
  return await Auth(request, {
    providers: [
      GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
    ],
  })
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,  
        ...authConfig
    },
    providers: [
        GitHubProvider({
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
  secret: process.env.NEXT_SECRET
  } satisfies NextAuthConfig
)