import React from "react";
import Home from "../Home/Home";
import TopCategories from "../TopCategories/TopCategories";
import PopularItem from "../popular/PopularItem";
import Welcome from "../welcome/Welcome";

const Main = () => {
  return (
    <div>
      <Home />
      <TopCategories />
      <Welcome />
      <PopularItem />
    </div>
  );
};

export default Main;
