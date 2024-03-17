import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";
import { useState, useEffect } from "react";
import { Pie, Line, Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale);

export default function Charts({ data }) {
  const [roleData, setRoleData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [sortRoles, setSortRoles] = useState(null);

  useEffect(() => {
    if (data) {
      const labels = Object.entries(data.role_count).map(
        ([category, count]) => category
      );
      const counts = Object.entries(data.role_count).map(
        ([category, count]) => count
      );

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

      const skillEntries = Object.entries(data.skill_count);
      const skill_count = skillEntries?.slice(0, 10);
      const labelss = skill_count.map((category) => category[0]);
      const countss = skill_count.map((count) => count[1]);
      const datass = {
        labels: labelss,
        datasets: [
          {
            label: "Count",
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

      const skillEntriess = Object.entries(data.role_count);
      const sortedSkills = skillEntries.sort((a, b) => b[1] - a[1]);
      const top10Skills = sortedSkills.slice(0, 10);
      console.log(top10Skills);
      const labelsss = top10Skills.map((category) => category[0]);
      const countsss = top10Skills.map((count) => count[1]);
      const datasss = {
        labels: labelsss,
        datasets: [
          {
            label: "Count",
            data: countsss,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
              "#ff6384",
              "#36a2eb",
              "#ffce56",
            ],
            borderWidth: 2,
          },
        ],
      };

      setSortRoles(datasss);
    }
  }, [data]);

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
            <Doughnut
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
              }}
            />
          )}
        </div>
        <div className=" bg-white rounded-lg px-4 py-6">
          <p className="font-medium">Trending Jobs</p>
          {sortRoles && (
            <Doughnut
              data={sortRoles}
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
