import React from "react";
import "./Welcome.css";
import Button from "../common/Button/Button";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="main-welcome">
        <div className="welcome-img">
          <img src="/images/welcome.jpg" width={600} />
        </div>
        <div className="welcome-data">
          <div className="hero-heading welcome-heading">
            Welcome to our Website
          </div>
          <div
            className="line"
            style={{
              borderBottom: "2.5px solid black",
              marginBottom: "20px",
              width: "295px",
            }}
          ></div>
          <p className="welcome-para">
            Incorporated in the year 2021, in Moradabad (Uttar Pradesh), Rising
            International introduces itself as a top manufacturer, exporter, and
            supplier of a wide spectrum of kitchenware, tabletop products, and
            home décor items. Our product range covers server stands, cutlery
            sets, cheese cutting boards, chopping boards, measuring cups,
            measuring spoons, napkin rings, utensil holders, cake stands,
            charger plates, chi & dip plates, kitchen trivet, mortar & pestle,
            serving bowls, serving platters, serving trays, tea coasters, wall
            clocks, wall hooks, jewelry stands, flower vases, decorative
            mirrors, candle holders, decorative lamps, decorative lanterns,
            outdoor planters, and so on. At Rising International, we prioritize
            maintaining the quality st
          </p>
          <Button name={"Read More"} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
