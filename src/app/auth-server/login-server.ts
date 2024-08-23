'use server'

import { signIn } from "../../../auth";
import { AuthError } from "next-auth";
import { UserForm } from "./form/Form";

export default async function handleLoginServer(data: UserForm) {
    const email = data.email
    const password = data.password
    try {
        const signin = signIn('credentials', { email, password })
        console.log(signin)
    } catch (err) {
        if (err instanceof AuthError) {
            if (err.type === 'CredentialsSignin') {
                err.message = 'Credenciais fornecidas não encontradas'
                throw err
            }
        }
    }
}