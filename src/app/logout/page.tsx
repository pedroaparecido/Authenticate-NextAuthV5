'use client'
import { useSession } from "next-auth/react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import { redirect } from "next/navigation";
import handleLogout from "./logout";

export default function HomePage() {
    const session = useSession()
    
    if (session.status === 'unauthenticated') redirect('/register')

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center">
        {
          session && <span>Olá {session.data?.user?.email}</span>
        }
        <form action={handleLogout}>
          <button className="p-[20px] bg-stone-400 text-white rounded-2xl mt-[10px] w-[230px] shadow-xl hover:bg-slate-600">Sair</button>
        </form>
      </main>
    </>
  );
}
