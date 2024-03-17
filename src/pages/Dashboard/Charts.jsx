import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";
import { useState, useEffect } from "react";
import { Pie, Line, Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale);

export default function Charts({ data }) {
  const [roleData, setRoleData] = useState(null);
  const [skillData, setSkillData] = useState(null);
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
    if (data) {
      console.log(data);
      const labels = Object.entries(data.role_count).map(
        ([category, count]) => category
      );
      const counts = Object.entries(data.role_count).map(
        ([category, count]) => count
      );

      console.log(labels, counts);
      const datas = {
        labels: labels,
        datasets: [
          {
            label: "Sectors",
            data: counts,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderWidth: 2,
          },
        ],
      };

      setRoleData(datas);

      const labelss = Object.entries(data.skill_count).map(
        ([category, count]) => category
      );
      const countss = Object.entries(data.skill_count).map(
        ([category, count]) => count
      );

      console.log(labels, counts);
      const datass = {
        labels: labelss,
        datasets: [
          {
            label: "Sectors",
            data: countss,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderWidth: 2,
          },
        ],
      };

      setSkillData(datass);
    }
  }, [data]);

  // Add Data and chartData as dependencies to useEffect

  return (
    <div className="flex flex-col gap-4 mt-5">
      <div className="w-full bg-white rounded-lg px-4 py-6">
        <p className="font-medium">Jobs in Various Sectors</p>
        {roleData && (
          <Line
            data={roleData}
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
      <div className="flex flex-1 gap-4">
        <div className="w-full bg-white rounded-lg px-4 py-6">
          <p className="font-medium">Trending Skills in Various Jobs</p>
          {skillData && (
            <Line
              data={skillData}
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
        {/* <div className=" bg-white rounded-lg px-4 py-6">
          <p className="font-medium">Graph 3</p>
          {roleData && (
            <Line
              data={roleData}
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
        </div> */}
      </div>
    </div>
  );
}
