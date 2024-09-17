import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import db from "./lib/db"
import { compareSync } from 'bcrypt-ts'
import authConfig from "./auth.config"
import { UnstorageAdapter } from '@auth/unstorage-adapter'
import { redis } from "./util/Redis"
import { createStorage } from "unstorage"
import redisDriver from 'unstorage/drivers/redis'

const storage = createStorage({
    driver: redisDriver({
        host: 'localhost',
        tls: false as any,
        port: 6379
    })
})

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: UnstorageAdapter(storage),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,  
        ...authConfig
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true
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

                if (!user) {
                    return null
                }
                
                const comparePass = compareSync(password, user.password as string)
                
                if (comparePass) {
                    await redis.set(`${user.id}`, JSON.stringify(user))
                    return { id: user.id, email: user.email, user: user.name }
                }

                return null
            }
        })
  ],
  secret: process.env.NEXT_SECRET,
  } satisfies NextAuthConfig
)