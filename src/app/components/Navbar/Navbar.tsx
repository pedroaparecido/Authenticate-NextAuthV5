'use client'

import Link from "next/link"

export default function Navbar() {
    return(
        <div className="flex flex-col items-center pt-[10px] border-2 p-[15px] bg-gray-100 shadow-xl">
            <div className="flex flex-row bg-slate-400 border-solid border-slate-400 p-[10px] border-8 w-[1000px] justify-between rounded-xl text-white">
                <Link href="/">Home</Link>
                <Link href="/auth-client">Auth (Client)</Link>
                <Link href="/auth-server">Auth (Server)</Link>
                <Link href="/register">Register</Link>
            </div>
        </div>
    )
}