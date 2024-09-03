'use server'
import { auth, signIn } from "../../../auth";
import { AuthError } from "next-auth";
import { UserForm } from "./form/Form";
import { redirect } from "next/navigation";

export async function handleLoginServer(data: UserForm) {
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

export async function handleGithubServer() {
    await signIn("github")
}

export async function handleGoogleServer() {
    try {
        await signIn("google")
    } catch (err) {
        if (err instanceof AuthError) {
            if (err.type === 'CredentialsSignin') {
                err.message = 'Credenciais fornecidas não encontradas'
                throw err
            }
        }
    }
}

export async function isAuthenticated() {
    const session = await auth()
    if (session) {
        return true
    } else {
        return false
    }
}