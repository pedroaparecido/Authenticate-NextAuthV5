'use client'
import Card from "./components/Card/Card";
import Form from "./components/form/Form";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-[88vh] flex-col items-center justify-center">
        <Card>
          <Form />
        </Card>
      </main>
    </>
  );
}
