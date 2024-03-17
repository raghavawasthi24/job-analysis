import React from "react";
import Header from "../../../components/Navbar";

export default function HeroSection() {
  return (
    <section className="hero text-center">
      <Header />
      <div className="flex flex-col items-center gap-3 my-10 px-1 sm:px-5">
        <h1 className="w-auto md:w-[80%] my-3 text-4xl font-bold tracking-tight text-gray-800 md:text-6xl">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="px-2 my-2 text-base text-gray-600 md:leading-relaxed">
          From strategic planning to digital presence, we are your dedicated
          partner in achieving solo success.
        </p>
        <a
          className="w-[200px] px-5 py-3 text-white transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:text-white shadow-slate-300 hover:shadow-sm hover:shadow-slate-400 hover:-translate-y-px"
          href=""
        >
          View Pricing
        </a>
      </div>
    </section>
  );
}
