'use server'

import { redirect } from "next/navigation"
import db from "../../../lib/db"
import { UserForm } from "./form/Form"


export default async function handleRegister(data: UserForm) {
    console.log(data)
    if (!data.email || !data.password) throw new Error('Os campos devem ser preenchidos')

    const user = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (user) throw new Error('Esse usuário já existe')
    
    await db.user.create({
        data: {
            email: data.email,
            password: data.password,
        }
    })

    redirect('/')
}