import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Charts from "./Charts";
import Categories from "./components/Categories";
import { Chart } from "chart.js";
import Maps from "./Maps";
import Jobs from "./components/Jobs";
import axios from "axios";

export default function Dashboard() {
  const [ctg, setCtg] = useState("");
  useEffect(() => {
    console.log(ctg);
    axios
      .post("https://dqct2msz-8000.inc1.devtunnels.ms/classify/suggest", {
        sector: ctg,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ctg]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex-col h-screen overflow-auto p-6 bg-gray-50">
        <Categories setCtg={setCtg} />
        <div className="flex gap-4">
          <div className="flex flex-col w-2/3">
            <Charts />
          </div>
          <div className="w-1/3 overflow-auto">
            <Jobs />
          </div>
        </div>
        <div className="mt-5 rounded-lg">
          <Maps />
        </div>
      </div>
    </div>
  );
}
