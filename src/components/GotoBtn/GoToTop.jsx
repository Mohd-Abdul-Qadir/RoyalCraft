import React, { useEffect, useState } from "react";
import "./GoTo.css";
import { FaArrowUp } from "react-icons/fa";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="main-div">
      {isVisible && (
        <div className="top-btn" onClick={gotoBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
