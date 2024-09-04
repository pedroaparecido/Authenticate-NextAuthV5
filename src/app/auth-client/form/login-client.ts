'use server'
import { AuthError } from "next-auth";
import { signIn } from "../../../../auth";
import { UserForm } from "./Form";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export async function handleLoginClient(data: UserForm) {
    const email = data.email
    const password = data.password
    await signIn('credentials',
        {
            email,
            password,
            redirect: true,
            callbackUrl: '/logout'
        }).then((err: any) => {
            if (err instanceof AuthError) {
                if (err.type === 'CredentialsSignin') {
                    err.message = 'Credenciais fornecidas não encontradas'
                    throw err
                }
            }
    })
}

export async function handleGithubClient() {
    await signIn("github")
}

export async function handleGoogleClient() {
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