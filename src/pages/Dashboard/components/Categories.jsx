import React, { useState } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { IoMdSearch } from "react-icons/io";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function Categories() {
  const sectors = [
    {
      name: "Healthcare",
      icon: MdHealthAndSafety,
    },
    {
      name: "Education",
      icon: MdHealthAndSafety,
    },
    {
      name: "Manufacturing",
      icon: MdHealthAndSafety,
    },
    {
      name: "Sales",
      icon: MdHealthAndSafety,
    },
    {
      name: "Finance",
      icon: MdHealthAndSafety,
    },
    {
      name: "Technology",
      icon: MdHealthAndSafety,
    },
  ];

  const [search, setSearch] = useState("");

  const submitHandler = () => {
    console.log(search);
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">Explore the jobs</p>
      <div className="flex items-center gap-6">
        {sectors.map((sector, key) => (
          <div className="flex flex-col items-center" key={key}>
            <MdHealthAndSafety className="w-12 h-12 border p-2 rounded-full" />
            <p className="text-gray-600">{sector.name}</p>
          </div>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-col items-center">
              <IoMdSearch className="w-12 h-12 border p-2 rounded-full" />
              <p className="text-gray-600">Search More</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <p className="font-medium">Enter to search</p>
            </DialogHeader>
            <Input type="search" onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={submitHandler}>Search</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
