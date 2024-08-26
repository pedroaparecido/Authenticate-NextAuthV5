'use client'

import React from "react"

interface IProps {
    children: React.ReactNode
}

export default function Button({ children }: IProps) {
    return(
        <button className="p-[20px] bg-slate-600 rounded-2xl hover:bg-sky-700">
            {children}
        </button>
    )
}