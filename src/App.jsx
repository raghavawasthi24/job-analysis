import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Dashboard from "./pages/Dashboard/dashboard";
import Maps from "./pages/Dashboard/Maps";

export default function App() {
  return (
      
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="Maps" element={<Maps/>} /> 
            </Routes>
          </BrowserRouter>
       
  );
}
