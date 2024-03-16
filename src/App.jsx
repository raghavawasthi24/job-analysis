import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Dashboard from "./pages/Dashboard/dashboard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
      
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </BrowserRouter>
       
  );
}
