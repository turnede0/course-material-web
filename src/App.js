import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Course from "./routes/course";
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
          <Route path={`/category/:categoryName`}>
            <Route index exact element={<Course />} />
            <Route
              path={`/category/:categoryName/:courseId`}
              element={<CourseDetail />}
            />
          </Route>
        </Route>
      </Routes>
      {/* <RouterProvider router={router} /> */}
      <Footer />
    </div>
    // <RouterProvider router={router} />
  );
}

export default App;
