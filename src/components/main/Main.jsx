import React from "react";
import Home from "../Home/Home";
import TopCategories from "../TopCategories/TopCategories";
import PopularItem from "../popular/PopularItem";
import Welcome from "../welcome/Welcome";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Home />
      <TopCategories />
      <Welcome />
      <PopularItem />
      <Footer />
    </div>
  );
};

export default Main;
