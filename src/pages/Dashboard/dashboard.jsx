import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Charts from "./Charts";
import Categories from "./components/Categories";
import { Chart } from "chart.js";
import Maps from "./Maps";
import Jobs from "./components/Jobs";
import axios from "axios";
import { Button } from "../../components/ui/button";

export default function Dashboard() {
  const [ctg, setCtg] = useState("All");
  const [data, setData] = useState(null);
  const [jobdata, setJobData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dqct2msz-8000.inc1.devtunnels.ms/classify/jobs")
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
    console.log(ctg)
    const filtered = jobdata.filter(job => job.sector == ctg || ctg == "All");
    setFilteredData(filtered);
  }, [jobdata]);

  useEffect(() => {
    if(ctg=="All"){
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
    }
    else{
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

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex-col h-screen overflow-auto p-6 bg-gray-50">
        <Categories setCtg={setCtg} ctg={ctg}/>
        <div className="flex gap-4 mt-5 w-full overflow-auto">
          {ctg ? roles?.map((role, key) => <Button>{role}</Button>) : null}
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-2/3">
            <Charts data={data} />
          </div>
          <div className="w-1/3 overflow-auto">
            <Jobs data={filteredData? filteredData : jobdata} />
          </div>
        </div>
        <div className="mt-5 rounded-lg">
          <Maps />
        </div>
      </div>
    </div>
  );
}
