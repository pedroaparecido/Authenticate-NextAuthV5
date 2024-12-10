'use server'
import { redirect } from "next/navigation"
import db from "../../../lib/db"
import { UserForm } from "./form/Form"

import { redis } from "../../../util/Redis"


export async function handleRegister(data: any) {
    if (!data.email || !data.password) throw new Error('Os campos devem ser preenchidos')

    const user = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (user) throw new Error('Esse usuário já existe')

    const newUser = await db.user.create({
        data: {
            email: data.email,
            password: data.password,
        }
    })
    if (data.email === newUser.email && data.password === newUser.password)
        return user
}