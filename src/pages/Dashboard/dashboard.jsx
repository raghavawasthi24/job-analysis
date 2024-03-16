import React from "react";
import Sidebar from "../../components/Sidebar";
import Charts from "./Charts";
import Categories from "./components/Categories";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex-col h-screen overflow-auto p-6">
        <Categories />
        <Charts />
      </div>
    </div>
  );
}
