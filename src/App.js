import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import CategoryDetail from "./routes/categoryDetail";
import CourseDetail from "./routes/courseDetail";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category">
          <Route index exact element={<Category />} />
          <Route path={`/category/:categoryID`}>
            <Route index exact element={<CategoryDetail />} />
            <Route
              path={`/category/:categoryID/:courseId`}
              element={<CourseDetail />}
            />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
