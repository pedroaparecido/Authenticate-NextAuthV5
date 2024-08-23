import { useForm } from "react-hook-form"


export interface UserForm {
    id: string,
    email: string,
    password: string
}

export default function Form() {
    const { handleSubmit, register } = useForm()
    
    const handleAuth = async () => {

    }

    return(
        <form onSubmit={handleSubmit(handleAuth)} className="flex flex-col items-center justify-center gap-2">
            <input className="p-[10px] outline-none rounded-xl text-black" type="email" />
            <input className="p-[10px] outline-none rounded-xl text-black" type="text" />
            <button className="p-[20px] bg-white text-black rounded-2xl mt-[10px] w-[230px]">Entrar</button>
        </form>
    )
}