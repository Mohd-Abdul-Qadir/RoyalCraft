import React from "react";
import "./Top.css";
const TopCategories = () => {
  return (
    <>
      <h1 className="top-heading hero-heading">Top Categories</h1>
      <div className="main-container">
        <div className="container">
          <div className="item item-1">
            <img src="/images/item5.jpg" alt="item1" className="item-img" />
            <button className="item-btn">Candle Stand</button>
          </div>
          <div className="item item-2">
            <img src="/images/item2.jpg" alt="item1" className="item-img" />
            <button className="item-btn-2">Vase</button>
          </div>
          <div className="item item-3">
            <img src="/images/item3.jpg" alt="item1" className="item-img" />
            <button className="item-btn-2">Wall Hanging Space</button>
          </div>
          <div className="item item-4">
            <img src="/images/item4.jpg" alt="item1" className="item-img" />
            <button className="item-btn-2">Box</button>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <button className="item-btn-2">Art</button>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <button className="item-btn-2">Art</button>
          </div>
          <div className="item item-5">
            <img src="/images/item1.jpg" alt="item1" className="item-img" />
            <button className="item-btn-2">Art</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategories;
