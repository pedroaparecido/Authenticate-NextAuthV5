'use client'

import Card from "../components/Card/Card"
import Form from "./form/Form"
import Navbar from "../components/Navbar/Navbar"

export default function Register() {
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