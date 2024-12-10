'use server'
import userSchema from "./user.schema"

export async function handleCreate(body: any) {
    return await userSchema.create(body)
}

export async function handleGet(email: string) {
    return await userSchema.find({ email: email })
}