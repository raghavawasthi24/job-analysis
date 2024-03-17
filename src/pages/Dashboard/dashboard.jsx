import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Charts from "./Charts";
import Categories from "./components/Categories";
import { Chart } from "chart.js";
import Maps from "./Maps";
import Jobs from "./components/Jobs";
import axios from "axios";
import { Button } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Pie } from "react-chartjs-2";

export default function Dashboard() {
  const [ctg, setCtg] = useState("All");
  const [data, setData] = useState(null);
  const [jobdata, setJobData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [role, setRole] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dqct2msz-8000.inc1.devtunnels.ms/classify/jobs")
      .then((res) => {
        setJobData(res.data);
        console.log(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter data based on sector
    console.log(ctg);
    const filtered = jobdata.filter(
      (job) => job.sector === ctg || ctg === "All"
    );
    setFilteredData(filtered);
  }, [jobdata, ctg]);

  useEffect(() => {
    if (ctg == "All") {
      axios
        .post("https://dqct2msz-8000.inc1.devtunnels.ms/classify/suggest", {
          sector: "",
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("https://dqct2msz-8000.inc1.devtunnels.ms/classify/suggest", {
          sector: ctg,
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ctg]);

  const roles = data?.role_count && Object.keys(data.role_count);

  const sumit = (roles) => {
    axios
      .get("https://dqct2msz-8000.inc1.devtunnels.ms/classify/skills")
      .then((res) => {
        console.log(res.data);
        const obj = res.data;
        const keys = Object.keys(obj);
        keys.forEach((key) => {
          if (key === "Corporate Sales Specialist") {
            console.log("coming here");
            setRole(obj[0]);
          }
        });
        // Set the role state after successfully fetching data
        console.log(obj);
        console.log(keys);
        console.log(role);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const datau = {
    labels: [
      "Communication Skill",
      "Problem Solving",
      "Empathy",
      "Adaptability",
      "Self-Control",
      "Teamwork",
    ],
    datasets: [
      {
        label: "",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex-col h-screen overflow-auto p-6 bg-gray-50">
        <Categories setCtg={setCtg} ctg={ctg} />
        <div className="flex gap-4 mt-5 w-full overflow-auto damm">
          {ctg
            ? roles?.map((role, key) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">{role}</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Pie data={datau} />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))
            : null}
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-2/3">
            <Charts data={data} role={role} />
          </div>
          <div className="w-1/3 overflow-auto">
            <Jobs data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
}
