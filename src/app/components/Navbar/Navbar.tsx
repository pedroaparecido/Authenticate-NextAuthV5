'use client'

import Link from "next/link"

export default function Navbar() {
    return(
        <div className="flex flex-col items-center pt-[10px] border-2 p-[15px] rounded-3xl bg-gray-100">
            <div className="flex flex-row border-solid border-neutral-500 p-[10px] border-8 w-[600px] justify-between rounded-xl text-black">
                <Link href="/">Home</Link>
                <Link href="/auth-client">Auth (Client)</Link>
                <Link href="/auth-server">Auth (Server)</Link>
                <Link href="/register">Register</Link>
            </div>
        </div>
    )
}