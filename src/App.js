import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";

function App() {
  return (
    <div>
      <Navbar />

      {/* <Analytics />
      <Newsletter /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
