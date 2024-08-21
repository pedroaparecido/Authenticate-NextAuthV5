'use client'

import Link from "next/link"

export default function Navbar() {
    return(
        <div className="flex flex-col items-center pt-[10px]">
            <div className="flex flex-row border-solid border-white p-[20px] border-2 w-[600px] justify-between">
                <Link href="/">Home</Link>
                <Link href="/auth-client">Auth (Client)</Link>
                <Link href="/auth-server">Auth (Server)</Link>
                <Link href="/admin">Admin (Only)</Link>
            </div>
        </div>
    )
}