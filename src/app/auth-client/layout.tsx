'use client'
import { Inter } from "next/font/google";
import { MemoryRouter } from "react-router-dom";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    <html lang="en">
        <SessionProvider session={session}>
          <body className={inter.className}>{children}</body>
        </SessionProvider>
    </html>
  );
}
