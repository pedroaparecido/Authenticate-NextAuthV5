import { redirect } from "react-router-dom"
import db from "../../../lib/db"
import { UserForm } from "../components/form/Form"

export default async function handleRegister(data: UserForm) {
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