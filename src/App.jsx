import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n";
import Dashboard from "./pages/Dashboard/dashboard";
import Maps from "./pages/Dashboard/Maps";
import Home from "./pages/Home/Home";
import Analysis from "./pages/Analysis";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  );
}
