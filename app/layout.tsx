import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PalmLeaf",
  description: "One stop shop for beachwear and surfboards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
