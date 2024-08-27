'use client'
import { useSession } from "next-auth/react";
import ButtonCard from "./components/ButtonCard/ButtonCard";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

export default function HomePage() {
  const session = useSession()
  
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-[81vh] justify-center items-center">
        <ButtonCard session={session} />
      </main>
    </>
  );
}
