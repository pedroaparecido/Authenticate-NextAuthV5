'use client'

import Card from "../components/Card/Card"
import Form from "./form/Form"
import Navbar from "../components/Navbar/Navbar"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Register() {
    const session = useSession()
    if (session) redirect('/logout')
    
    return(
        <>
            <Navbar />
            <div className="flex h-[88vh] flex-col items-center justify-center">
                <Card>
                    Register Page
                    <Form />
                </Card>
            </div>
        </>
    )
}