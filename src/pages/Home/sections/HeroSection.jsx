import React from "react";
import Header from "../../../components/Navbar";

export default function HeroSection() {
  return (
    <section className="hero text-center">
      <Header />
      <div className="flex flex-col items-center gap-3 my-10 px-1 sm:px-5">
        <h1 className="w-auto md:w-[90%] my-3 text-4xl font-bold tracking-tight text-gray-800 md:text-6xl">
          Empowering Uttarakhand's Workforce with Data-Driven Solutions
        </h1>
        <p className="px-2 my-2 text-base text-gray-600 md:leading-relaxed">
          Unlock the Potential of Uttarakhand's Job Market with JobInsight
        </p>
        <a
          className="w-[200px] px-5 py-3 text-white transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:text-white shadow-slate-300 hover:shadow-sm hover:shadow-slate-400 hover:-translate-y-px"
          href="/dashboard"
        >
          Visit Dashboard
        </a>
      </div>
    </section>
  );
}
