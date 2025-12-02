import React from "react";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-green-700 text-white">
      <div className="hero-grain"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="container">
        <h3 className="mb-6 pt-32 text-center text-5xl">
          The largest card directory
          <br />
          on the internet.
        </h3>
        <p className="mx-auto max-w-md text-center opacity-70">
          Discover top credit cards. Compare credit, debit, and travel cards
          easily and choose the best.
        </p>
        <div className="relative mx-auto mt-60 flex h-full max-w-3xl justify-center">
          {/* top */}
          <Image
            src="/cards/card-3.png"
            width={400}
            height={500}
            alt="credit-card-demo-img"
            className="absolute z-10 -translate-y-12 rotate-90 shadow-lg"
          />
          {/* left */}
          <Image
            src="/cards/card-1.png"
            width={400}
            height={500}
            alt="credit-card-demo-img"
            className="absolute left-3.5 -translate-x-4 -scale-90 rotate-70"
          />
          {/* right */}
          <Image
            src="/cards/card-2.png"
            width={400}
            height={500}
            alt="credit-card-demo-img"
            className="absolute right-3.5 translate-x-4 -scale-90 rotate-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
