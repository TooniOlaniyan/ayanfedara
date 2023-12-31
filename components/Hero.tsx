import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <p className="uppercase text-[2rem]  heading-hero ">web-3 </p>
        <p className="uppercase text-[2rem]   sm:self-end !text-text-green  heading-hero">
          Analyst
        </p>
        <p className="uppercase text-[2rem]   heading-hero">Financial -</p>
        <p className="uppercase text-[2rem]   heading-hero sm:self-end">Analyst</p>
      </div>
      <div className="flex w-fit">
        <p className=" text-gray-400 sm:italic text-sm text-[1rem]">
          Streamer on HTX,Binance,Gate Finanacial educator ,<br />{" "}
          <span className="text-text-green">crypto researcher</span> , using my
          knowledge and <br /> passion to create the next millionaires
        </p>
      </div>
    </section>
  );
};

export default Hero;
