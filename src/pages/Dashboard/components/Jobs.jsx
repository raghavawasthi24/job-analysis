import React, { useState, useEffect } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import axios from "axios";

export default function Jobs({data}) {
  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
    console.log(data)


  return (
    <div className="bg-white mt-5 rounded-lg p-2 gap-4 h-[58rem] overflow-auto">
      <p className="font-medium p-4">Browse Jobs</p>
      {data.map((subdata, index) => (
        <div className="p-4 grid gap-4 shadow-sm" key={index}>
          <p className="font-medium text-lg">{subdata.role}</p>
          <div className="flex gap-2 flex-wrap">
            {subdata.skills.map((skill, key) => (
              <Badge key={key} className="bg-gray-100 text-black">{skill}</Badge>
            ))}
          </div>
          <a href={subdata.link} target="_blank" rel="noopener noreferrer">
            <Button className="w-fit self-end bg-blue-500">Apply Now</Button>
          </a>
        </div>
      ))}
    </div>
  );
}
