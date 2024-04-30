import React, { useState } from "react";
import "./Popular.css";
import { GoHeart, GoHeartFill } from "react-icons/go";

const PopularItem = () => {
  const [icon, setIcon] = useState(true);

  const handleIcon = () => {
    setIcon(!icon);
  };
  return (
    <div>
      <h1 className="top-heading hero-heading" style={{ marginTop: "80px" }}>
        Popular Items
      </h1>
      <div className="main-container">
        <div className="container-top">
          <div className="item item-2">
            <img src="/images/item2.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-2">
            <img src="/images/item2.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-3">
            <img src="/images/item3.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-4">
            <img src="/images/item4.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <div className="item-button">
              <button className="item-btn-pop-black">Enquiry Now</button>
              <button className="item-btn-pop">View</button>
            </div>
            <div className="pop-icons" onClick={handleIcon}>
              {icon ? <GoHeart /> : <GoHeartFill className="heart-icon" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
