import React from "react";
import zaiper from "../../../assests/zaiper.png";
import spotify from "../../../assests/spotify.png";
import zoom from "../../../assests/zoom.png";
import slack from "../../../assests/slack.png";
import amazon from "../../../assests/amazon.png";
import adobe from "../../../assests/adobe.png";

export default function Companies() {
  //list of all companies
  const companies = [zaiper, spotify, zoom, slack, amazon, adobe];

  return (
    <section className="flex justify-center">
      <div className="">
        <h1 className="text-center my-4 text-gray-400">
          Trusted By 250+ Companies
        </h1>

        <div className="flex px-2  lg:w-full flex-wrap items-center justify-center gap-3">
            {/* mapping all companies */}
          {companies.map((company, index) => (
            <img src={company} alt="" className="w-[150px]" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
