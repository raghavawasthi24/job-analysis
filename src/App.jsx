import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Dashboard from "./pages/Dashboard/dashboard";
import Maps from "./pages/Dashboard/Maps";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="Maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
}
