import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";
import { useState, useEffect } from "react";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import Maps from "./Maps";

Chart.register(CategoryScale, LinearScale);

export default function Charts() {
  const [chartData, setChartData] = useState(null);
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  useEffect(() => {
    // Prepare chart data
    const data = {
      labels: Data.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained ",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          // borderColor: "black",
          borderWidth: 2,
        },
      ],
    };

    // Set chart data only if it's not set yet
    if (!chartData) {
      setChartData(data);
    }
  }, [Data, chartData]); // Add Data and chartData as dependencies to useEffect

  return (
    <div className="flex gap-4 mt-5">
      <div>
        <div className="w-full bg-white rounded-lg px-4 py-6">
          <p className="font-medium">Graph 1</p>
        
            {chartData && (
              <Line
                data={chartData}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "",
                      font: {
                        size: 16,
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            )}
        
        
        </div>
        
      </div>
      <div className="grid gap-4">
        <div className=" bg-white rounded-lg px-4 py-6">
          <p className="font-medium">Graph 2</p>
          {chartData && (
            <Doughnut
              data={chartData}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: true,
                    text: "",
                    font: {
                      size: 4,
                    },
                  },
                },
              }}
            />
          )}
        </div>
        <div className=" bg-white rounded-lg px-4 py-6">
          <p className="font-medium">Graph 3</p>
          {chartData && (
            <Doughnut
              data={chartData}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: true,
                    text: "",
                    font: {
                      size: 16,
                    },
                  },
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
