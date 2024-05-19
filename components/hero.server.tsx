import React from "react";
import Image from "next/image";

const Hero = () => {
  console.log("fresh load");

  return (
    <section className="relative w-full h-[600px] flex justify-center items-center">
      <div className="hero-content rounded-xl shadow-black shadow-md">
        <div className="p-10">
          <h1 className="text-6xl text-white font-extrabold">Palmleaf</h1>
          <p className="text-white text-xl">
            Your One Stop Shop For a Day at the Beach!
          </p>
        </div>
      </div>
      <Image
        className="bg-img"
        src="/assets/hero-bg.jpg"
        alt="ocean photo"
        // priority={true}
        fill={true}
      />
    </section>
  );
};

export default Hero;
