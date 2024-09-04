import { Inter } from "next/font/google";
import "./globals.css";
import { MemoryRouter } from "react-router-dom";
import { auth } from "../../auth";
import { SessionProvider } from "next-auth/react";

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
      <SessionProvider session={session}>
          <body className={inter.className}>{children}</body>
        </SessionProvider>
    </html>
  );
}
