import Image from "next/image";
import Hero from "../components/hero.server";
import Navbar from "../components/navbar.client";

export default async function Home() {
  return (
    <main className="w-full min-h-screen ">
      <Hero />
    </main>
  );
}
