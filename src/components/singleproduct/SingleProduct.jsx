import React from "react";
import Header from "../Header/Header";
import Button from "../common/Button/Button";
import Footer from "../Footer/Footer";
import "./SingleProduct.css";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
const SingleProduct = () => {
  return (
    <div>
      <Header />

      <h1 className="top-heading hero-heading" style={{ marginTop: "60px" }}>
        Product Details
      </h1>
      <div className="main-contact">
        <div className="container-about">
          <div className="main-input">
            <div
              className="product-card"
              style={{ width: "300px", objectFit: "cover" }}
            >
              {/* <img src="/images/item2.jpg" alt="item1" className="item-img" /> */}

              <div>
                <SideBySideMagnifier
                  imageSrc="/images/item2.jpg"
                  imageAlt="Second Slide"
                  largeImageSrc="/images/item2.jpg"
                  alwaysInPlace={false}
                  fillAvailableSpace={true}
                  switchSides={false}
                  zoomPosition="left"
                  inPlaceMinBreakpoint={641}
                  fillAlignTop={true}
                  fillGapRight={0}
                  fillGapBottom={0}
                  fillGapTop={0}
                  fillGapLeft={0}
                />
              </div>
              <div className="small-img-row">
                <div className="small-img-col">
                  <img
                    src="/images/item1.jpg"
                    alt="item1"
                    className="item-img"
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src="/images/item3.jpg"
                    alt="item1"
                    className="item-img"
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src="/images/item4.jpg"
                    alt="item1"
                    className="item-img"
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src="/images/item5.jpg"
                    alt="item1"
                    className="item-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              This is flower pot
            </h2>
            <table
              width={"100%"}
              cellPadding={5}
              style={{ fontSize: "1.8rem", marginTop: "20px" }}
            >
              <tr>
                <th>Name:</th>
                <td>pot </td>
              </tr>
              <tr>
                <th>Color:</th>
                <td>red</td>
              </tr>
              <tr>
                <th>Categories:</th>
                <td>dilver</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>this is good product my company</td>
              </tr>
              <tr>
                <th>Preferred Buyer From</th>
                <td></td>
              </tr>
              <tr>
                <th>Location:</th>
                <td>Worldwide</td>
              </tr>
            </table>
            <div style={{ marginTop: "20px" }}>
              <Button name={"Send Query"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
