'use client'

import { useSession } from "next-auth/react"
import Card from "../components/Card/Card"
import Navbar from "../components/Navbar/Navbar"
import Form from "./form/Form"
import { redirect } from "next/navigation"

export default function AuthClient() {
    const session = useSession()

    if(session.status === 'authenticated') redirect('/logout')

    return(
        <>
        <Navbar />
            <div className="flex h-[81vh] flex-col items-center justify-center">
                <Card>
                    Auth Client
                    <Form />
                </Card>
            </div>
        </>
    )
}