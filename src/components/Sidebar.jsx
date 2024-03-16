import React, { useState } from "react";
import { Button } from "./ui/button.jsx";
import { Link, useLocation } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ImPriceTags } from "react-icons/im";

export default function Sidebar() {
  const [hovered, setHovered] = useState(true);
  const location = useLocation();

  return (
    <>
      {hovered ? (
        <div
          className="bg-blue-500 flex flex-col w-fit h-screen text-white pt-5 gap-2 p-4"
          //   onMouseLeave={() => setHovered(false)}
        >
          <Link to="/">
            <Button
              variant="ghost"
              size={hovered ? "default" : "icon"}
              className={`${hovered && "justify-start w-full"} ${
                location.pathname === "/" && "bg-blue-100 text-black border-l-2"
              }`}
            >
              <MdDashboardCustomize
                className={`${hovered && "mr-2"} h-5 w-5`}
              />
              {hovered && "Dashboard"}
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              size={hovered ? "default" : "icon"}
              className={`${hovered && "justify-start w-full"} ${
                location.pathname === "/d" && "bg-accent border-primary "
              }`}
            >
              <ImPriceTags className={`${hovered && "mr-2"} h-5 w-5`} />
              {hovered && "Pricing"}
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              size={hovered ? "default" : "icon"}
              className={`${hovered && "justify-start w-full"} ${
                location.pathname === "/d" &&
                "bg-accent border-l-2 border-primary "
              }`}
            >
              <CgProfile className={`${hovered && "mr-2"} h-5 w-5`} />
              {hovered && "Accounts"}
            </Button>
          </Link>
        </div>
      ) : (
        <div
          className="bg-blue-500 w-fit h-screen text-white"
          //   onMouseEnter={() => setHovered(true)}
        >
          <Link to="/">
            <Button variant="ghost" className="m-2">
              <MdDashboardCustomize className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
