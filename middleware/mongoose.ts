'use server'
import mongoose from 'mongoose'

export async function ConnectionMongo() {
    const client = await mongoose
    return await client.connect("mongodb+srv://pedroaparecidori:5tlnAjfLPNUgpQxK@cluster-teste.jkr8r.mongodb.net/")
}