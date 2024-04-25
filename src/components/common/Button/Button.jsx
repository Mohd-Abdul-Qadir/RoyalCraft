import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <div className="main-button">
      <button className="main-btn">{props.name}</button>
    </div>
  );
};

export default Button;
