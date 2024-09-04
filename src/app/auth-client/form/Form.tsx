import { AuthError } from "next-auth"
import { FieldValues, useForm } from "react-hook-form"
import { signIn } from "../../../../auth"
import { handleGithubClient, handleLoginClient } from "./login-client"


export interface UserForm {
    id: string,
    email: string,
    password: string
}

export default function Form() {
    const { handleSubmit, register } = useForm<UserForm>()
    
    const handleAuth = async (data: UserForm) => {
            await handleLoginClient(data)
    }

    const handleGithub = async () => {
        await handleGithubClient()
    }

    const handleGoogle = async () => {
        signIn('google', { redirect: true, callbackUrl: '/logout' })
    }

    return(
        <>
            <form onSubmit={handleSubmit(handleAuth)} className="flex flex-col items-center justify-center gap-2">
                <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="email" {...register('email')} />
                <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="password" {...register('password')} />
                <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Entrar</button>
            </form>
            <form action={handleGithub}>
                <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Github</button>
            </form>
            <form action={handleGoogle}>
                <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Google</button>
            </form>
        </>
    )
}