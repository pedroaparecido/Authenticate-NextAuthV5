'use server'

import { signIn } from "../../../auth";
import { AuthError } from "next-auth";
import { UserForm } from "./form/Form";
import { redirect } from "next/navigation";

export default async function handleLoginServer(data: UserForm) {
    const email = data.email
    const password = data.password
    try {
        await signIn('credentials', { email, password })
        redirect('/logout')
    } catch (err) {
        if (err instanceof AuthError) {
            if (err.type === 'CredentialsSignin') {
                err.message = 'Credenciais fornecidas não encontradas'
                throw err
            }
        }
    }
}