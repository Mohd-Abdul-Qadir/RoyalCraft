import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./About.css";
import { MdBusinessCenter } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidBusiness } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <h1 className="top-heading hero-heading" style={{ marginTop: "120px" }}>
        About Us
      </h1>
      <div className="main-container-about" bgColor="light">
        <div className="container-about">
          <div style={{ position: "relative" }}>
            <div className="box-img"></div>
            <div className="box-img-bottom"></div>
            <img
              src="/images/about-img.jpg"
              alt="about us image"
              className="about-image"
            />
          </div>
          <div className="footer-para">
            Incorporated in the year 2018, in Moradabad (Uttar Pradesh), Rising
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
            maintaining the quality standards of our products. We develop our
            entire range of products using superior-quality metal, wood,
            ceramic, paints, and other raw materials. The offered products are
            known for their extraordinary beauty, exquisite designs, glossy &
            smooth finish, and durability. Our products are extensively used in
            various residential and commercial areas for decoration. We have a
            sound manufacturing unit that enables us to deliver the best-grade
            products with astounding designs to our valuable customers. With the
            assistance of our dedicated and talented artisan, we provide our
            products in both standards as well as customized options according
            to the specifications of our customers. We, at Rising International,
            make our products checked thoroughly on several parameters to ensure
            their preciseness. Working under the headship of our honorable MD,
            Mr. Mohammad Azam, we have secured a respectable position in the
            market. His energetic approach and extensive expertise in this
            domain enable us in achieving our business ambitions within the
            targeted time period. Our qualitative products, transparent
            dealings, timely delivery services, competitive pricing policy, and
            easy & convenient payment options enable us to fully satisfy our
            customers across the world.
          </div>
        </div>
      </div>
      <h1 className="top-heading hero-heading" style={{ marginTop: "80px" }}>
        GLIMPSE OF OUR COMPANY
      </h1>
      <div className="main-glimpse">
        <div className="glimpse">
          <div className="glimpse-card">
            <MdBusinessCenter className="glimpse-icon" />
            <p className="card-title">Nature of Business</p>
            <p>Manufacturer, Exporter, Wholesaler, Supplier &</p>
            <p>Trader</p>
          </div>
          <div className="glimpse-card">
            <RiDiscountPercentFill className="glimpse-icon" />
            <p className="card-title">GST No</p>
            <p>1541512563202</p>
          </div>
          <div className="glimpse-card">
            <BiSolidBusiness className="glimpse-icon" />
            <p className="card-title">Year of Establishment</p>
            <p>2019</p>
          </div>
          <div className="glimpse-card">
            <IoIosPeople className="glimpse-icon" />
            <p className="card-title">Number of Employees</p>
            <p>Upto 25</p>
          </div>
          <div className="glimpse-card">
            <IoEarth className="glimpse-icon" />
            <p className="card-title">Market Covered</p>
            <p>Globally</p>
          </div>
          <div className="glimpse-card">
            <FaUserTie className="glimpse-icon" />
            <p className="card-title">Name of Company Founder</p>
            <p>Shahnawaz Alam</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
