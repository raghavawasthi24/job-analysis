import React from "react";
import Sidebar from "../../components/Sidebar";
import Categories from "./components/Categories";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex-col px-4 py-6">
        <Categories />
      </div>
    </div>
  );
}
