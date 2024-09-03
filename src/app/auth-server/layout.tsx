import { Inter } from "next/font/google";
import { MemoryRouter } from "react-router-dom";
import { SessionProvider } from "next-auth/react";
import NextAuthProvider from "./provider";
import { auth } from "../../../auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  'use server'
  const session = await auth()
  return (
    <html lang="en">
        <SessionProvider session={session} basePath="api/auth">
          <body className={inter.className}>{children}</body>
        </SessionProvider>
    </html>
  );
}
