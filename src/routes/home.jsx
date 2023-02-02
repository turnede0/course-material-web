import React from "react";
import Cards from "../components/Cards";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Newsletter />
    </div>
  );
}

export default Home;
