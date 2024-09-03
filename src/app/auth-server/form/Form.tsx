import { FieldValues, useForm } from "react-hook-form"
import { handleLoginServer, handleGithubServer, handleGoogleServer } from "../login-server"


export interface UserForm {
    id: string,
    email: string,
    password: string
}

export default function Form() {
    const { handleSubmit, register } = useForm<UserForm>()
    
    const handleAuth = async (data: UserForm) => {
        handleLoginServer(data)
    }

    const handleGithub = async () => {
        const ses = handleGithubServer()
        console.log(ses)
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit(handleAuth)} className="flex flex-col gap-2">
                <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="email" {...register('email')} />
                <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="password" {...register('password')} />
                <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Entrar</button>
            </form>
            
                <button onClick={() => handleGithubServer()} className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Github</button>
            
            <form action={handleGoogleServer}>
                <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Google</button>
            </form>
        </div>
    )
}