import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { CiSearch } from "react-icons/ci";

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
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">Explore the jobs</p>
      <div className="flex items-center gap-6">
        {sectors.map((sector, key) => (
          <div className="flex flex-col items-center">
            <MdHealthAndSafety className="w-12 h-12 border p-2 rounded-full" />
            <p className="text-gray-600">{sector.name}</p>
          </div>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-col items-center">
              <CiSearch className="w-12 h-12 border p-2 rounded-full" />
              <p className="text-gray-600">Search More --</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]"></DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
