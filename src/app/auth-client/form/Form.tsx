import { AuthError } from "next-auth"
import { FieldValues, useForm } from "react-hook-form"
import { signIn } from "../../../../auth"


export interface UserForm {
    id: string,
    email: string,
    password: string
}

export default function Form() {
    const { handleSubmit, register } = useForm<UserForm>()
    
    const handleAuth = async (data: UserForm) => {
        try {
            const email = data.email
            const password = data.password
            signIn('credentials', { email, password, redirect: true, callbackUrl: '/logout' })
        } catch (err) {
            if (err instanceof AuthError) {
                if (err.type === 'CredentialsSignin') {
                    err.message = 'Credenciais fornecidas não encontradas'
                    throw err
                }
            }
        }
    }

    const handleGithub = async () => {
        signIn('github', { redirect: true, callbackUrl: '/logout' })
    }

    const handleGoogle = async () => {
        signIn('google', { redirect: true, callbackUrl: '/logout' })
    }

    return(
        <form onSubmit={handleSubmit(handleAuth)} className="flex flex-col items-center justify-center gap-2">
            <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="email" {...register('email')} />
            <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="password" {...register('password')} />
            <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Entrar</button>
            <button onClick={handleGithub} className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Github</button>
            <button onClick={handleGoogle} className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Google</button>
        </form>
    )
}