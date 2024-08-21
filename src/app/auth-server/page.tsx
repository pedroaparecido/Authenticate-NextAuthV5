'use client'

import Card from "../components/Card/Card"
import Navbar from "../components/Navbar/Navbar"


export default function AuthServer() {
    return(
        <>
        <Navbar />
            <div className="flex h-[88vh] flex-col items-center justify-center">
                <Card>
                    Auth Server
                </Card>
            </div>
        </>
    )
}