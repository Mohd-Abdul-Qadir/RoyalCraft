import React from "react";
import Header from "../Header/Header";
import Button from "../common/Button/Button";
import { ReactTyped } from "react-typed";
import "./Home.css";
import CarouselFadeExample from "../carusal/CarouselFadeExample";
const Home = () => {
  return (
    <div>
      <div style={{ position: "relative", zIndex: "10" }}>
        <Header />
      </div>
      <CarouselFadeExample />
      {/* <div className="main" style={{ position: "relative" }}>
        <div style={{ marginTop: "-100px" }}>
          <img
            src="/images/banner1.jpg"
            alt="banner image"
            height={900}
            width="100%"
            className="banner-img"
          />

          <div
            className="section-hero-data"
            style={{ position: "absolute", top: "30%" }}
          >
            <ReactTyped
              className="hero-top-data"
              strings={["ROYAL CRAFT"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />

            <h1 className="hero-heading">
              Decorate Your Dream Space <br /> With Our Finest Collection
            </h1>
            <p className="hero-para">
              Explore our Curated Collections to discover the perfect pieces for
              you Unique Vision
            </p>
            <Button name={"Explore Collection"} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
