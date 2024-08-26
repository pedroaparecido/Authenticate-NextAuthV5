'use client'
import ButtonCard from "./components/ButtonCard/ButtonCard";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-[81vh] justify-center items-center">
        <ButtonCard />
      </main>
    </>
  );
}
