import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accesorios from "./pages/Accesorios";
import Alimentos from "./pages/Alimentos";
import Juguetes from "./pages/Juguetes";
import Buy from "./pages/Buy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/juguetes" element={<Juguetes />} />
        <Route path="/comprar" element={<Buy />} />
      </Routes>
      <Footer />
    </>
  );
}