import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

export default function Jobs() {
  const skills = ["C++", "C", "Java", "HTML", "C++", "C", "Java", "HTML"];
  return (
    <div className="bg-white mt-5 rounded-lg p-2 gap-4 h-[50rem] overflow-auto">
      <p className="font-medium p-4">Browse Jobs</p>
      {skills.map((skill, key) => (
        <div className="p-4 grid gap-4 shadow-sm">
          <p className="font-medium text-lg">Teaching</p>
          <div className="flex gap-2 flex-wrap">
            {skills.map((skill, key) => (
              <Badge className="bg-gray-100 text-black">{skill}</Badge>
            ))}
          </div>
          <Button className="w-fit self-end bg-blue-500">Apply Now</Button>
        </div>
      ))}
    </div>
  );
}
