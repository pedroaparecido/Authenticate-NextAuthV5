'use client'
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import Form from "./form/Form";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-[88vh] flex-col items-center justify-center">
        <Card>
            Home Page login
          <Form />
        </Card>
      </main>
    </>
  );
}
