import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CategoriesProvider } from "@/context/CategoriesContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ApolloWrapper } from "./ApolloWrapper";
import "./globals.css";

import Navbar from "../components/navbar.client";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["700", "800"],
});

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
      <body className={poppins.className}>
        <ApolloWrapper>
          <Navbar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
