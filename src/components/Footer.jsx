import React from "react";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import icon3 from "../assests/icon3.png";
import icon4 from "../assests/icon4.png";
import icon5 from "../assests/icon5.png";
import icon6 from "../assests/icon6.png";

export default function Footer() {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  return (
    <footer className="flex flex-col p-10 gap-5 border-t text-gray-600 body-font">
      <div className="flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-shrink-0 md:mx-0 md:text-left md:mt-0 mt-10">
          <p className="text-2xl font-bold">JobInside</p>

          <p className="w-auto md:w-[350px]">
            Join Us in Shaping the Future of Work in Uttarakhand
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <p className="text-gray-500 text-sm w-[150px] md:w-auto">
          © {new Date().getFullYear()} Untitled UI. All rights reserved.
        </p>
        {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {icons.map((icon, index) => {
            return <img src={icon} alt="" className="w-4 h-4 sm:w-6 sm:h-6" key={index} />;
          })}
        </div> */}
      </div>
    </footer>
  );
}
