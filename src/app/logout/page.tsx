'use client'
import { useSession } from "next-auth/react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import { redirect } from "next/navigation";

export default function HomePage() {
    const session = useSession()
    
    if (!session) redirect('/')

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center">
        {
          session && <span>Olá {session.data?.user?.email}</span>
        }
        <button className="p-[20px] bg-stone-400 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl">Sair</button>
      </main>
    </>
  );
}
