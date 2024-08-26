'use client'

import Link from "next/link"
import Button from "../Button/Button"

export default function Navbar() {
    return(
        <div className="flex flex-col items-center pt-[10px] border-2 p-[15px] bg-gray-100 shadow-xl">
            <div className="flex flex-row bg-slate-400 border-solid border-slate-400 p-[10px] border-8 w-[1000px] justify-between rounded-xl text-white">
                <Button><Link href="/">Home</Link></Button>
                <Button><Link href="/auth-client">Auth (Client)</Link></Button>
                <Button><Link href="/auth-server">Auth (Server)</Link></Button>
                <Button><Link href="/register">Register</Link></Button>
                <Button><Link href="/logout">Logout</Link></Button>
            </div>
        </div>
    )
}