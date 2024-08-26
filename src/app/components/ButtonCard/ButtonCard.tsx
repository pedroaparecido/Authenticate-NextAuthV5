'use client'

import Link from "next/link"
import Button from "../Button/Button"

export default function ButtonCard() {
    return(
        <div className="flex flex-col items-center border-2 p-[15px] bg-gray-100 shadow-2xl">
            <div className="flex flex-row bg-slate-400 border-solid border-slate-400 p-[10px] border-8 w-[400px] justify-center rounded-t-xl text-white">
                <Button><Link href="/">Home</Link></Button>
            </div>
            <div className="flex flex-row bg-slate-400 border-solid border-slate-400 p-[10px] border-8 w-[400px] justify-center gap-[30px] text-white">
                <Button><Link href="/auth-client">Auth (Client)</Link></Button>
                <Button><Link href="/auth-server">Auth (Server)</Link></Button>
            </div>
            <div className="flex flex-row bg-slate-400 border-solid border-slate-400 p-[10px] border-8 w-[400px] justify-center text-white">
                <Button><Link href="/register">Register</Link></Button>
            </div>
            <div className="flex flex-row bg-slate-400 border-solid border-slate-400 p-[10px] border-8 w-[400px] justify-center rounded-b-xl text-white">
                <Button><Link href="/logout">Logout</Link></Button>
            </div>
        </div>
    )
}