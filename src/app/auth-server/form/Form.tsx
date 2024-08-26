import { FieldValues, useForm } from "react-hook-form"
import handleLoginServer from "../login-server"


export interface UserForm {
    id: string,
    email: string,
    password: string
}

export default function Form() {
    const { handleSubmit, register } = useForm()
    
    const handleAuth = async (data: UserForm) => {
        handleLoginServer(data)
    }

    return(
        <form onSubmit={handleSubmit(handleAuth)} className="flex flex-col items-center justify-center gap-2">
            <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="email" {...register('email')} />
            <input className="p-[10px] outline-none rounded-xl bg-stone-400 text-white shadow-xl" type="password" {...register('password')} />
            <button className="p-[20px] bg-neutral-500 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Entrar</button>
        </form>
    )
}