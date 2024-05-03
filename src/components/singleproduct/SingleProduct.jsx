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
      <h1 className="top-heading hero-heading" style={{ marginTop: "80px" }}>
        Product Details
      </h1>
      <div className="main-contact">
        <div className="container-about">
          <div className="main-input">
            <div className="product-card" style={{ width: "400px" }}>
              {/* <img src="/images/item2.jpg" alt="item1" className="item-img" /> */}

              <SideBySideMagnifier
                //   className="input-position"
                imageSrc="/images/item2.jpg"
                largeImageSrc="/images/item2.jpg"
                alwaysInPlace={false}
                overlayOpacity={0.6}
                switchSides={false}
                zoomPosition="left"
                //   inPlaceMinBreakpoint={641}
                fillAvailableSpace={false}
                fillAlignTop={false}
                fillGapTop={0}
                fillGapRight={10}
                fillGapBottom={10}
                fillGapLeft={50}
                // zoomContainerDimensions={{ width: "800px", height: 800 }}
                zoomContainerBorder="1px solid #ccc"
                zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
              />
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
            <div className="main-icon">
              <p className="contact-icon">Name</p>
              <p className="contact-para">
                Delhi Rd, near bachcha jail, Hulshan ganj, naya gaon,
                <br /> Lakri Fazalpur, Moradabad, Uttar Pradesh 244001
              </p>
            </div>
            <div className="main-icon">
              <p className="contact-icon">{/* <MdEmail /> */}</p>
              <p className="contact-para">royalCraft@gmail.com</p>
            </div>
            <div className="main-icon">
              <p className="contact-icon">{/* <FaPhone />    */}</p>
              <p className="contact-para">+91 8755555175</p>
            </div>
            <Button name={"Submit"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
