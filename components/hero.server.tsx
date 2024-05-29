import React from "react";
import Image from "next/image";

const Hero = () => {
  console.log("fresh load");

  return (
    <section className="relative w-full h-[600px] flex justify-center items-center">
      <div className="hero-content rounded-xl">
        <h1 className="text-center text-6xl font-extrabold">Palmleaf</h1>
        <p className=" text-center text-xl">
          Your One Stop Shop For a Day at the Beach!
        </p>
      </div>
      <Image
        className="bg-img"
        src="/assets/hero-bg.jpg"
        alt="ocean photo"
        fill={true}
      />
    </section>
  );
};

export default Hero;
