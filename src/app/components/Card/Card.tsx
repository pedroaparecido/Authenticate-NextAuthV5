'use client'

import React from "react"

interface IProps {
    children: React.ReactNode
}

export default function Card({ children }: IProps) {
    return(
        <div className="flex flex-col items-center justify-center border-solid rounded-xl border-white border-8 w-[500px] h-[500px] shadow-2xl">
            {children}
        </div>
    )
}