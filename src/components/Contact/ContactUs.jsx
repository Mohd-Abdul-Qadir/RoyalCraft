import React from "react";
import Header from "../Header/Header";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./Contact.css";
import Button from "../common/Button/Button";
import Footer from "../Footer/Footer";
import ReactWhatsapp from "react-whatsapp";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <h1 className="top-heading hero-heading" style={{ marginTop: "80px" }}>
        Contact Us
      </h1>
      <div className="main-contact">
        <div className="container-about">
          <div>
            <div className="main-icon">
              <p className="contact-icon">
                <FaLocationDot />
              </p>
              <p className="contact-para">
                Delhi Rd, near bachcha jail, Hulshan ganj, naya gaon,
                <br /> Lakri Fazalpur, Moradabad, Uttar Pradesh 244001
              </p>
            </div>
            <div className="main-icon">
              <p className="contact-icon">
                <MdEmail />
              </p>
              <p className="contact-para">royalCraft@gmail.com</p>
            </div>
            <div className="main-icon">
              <p className="contact-icon">
                <FaPhone />
              </p>
              <p className="contact-para">+91 8755555175</p>
            </div>
          </div>
          <div className="main-input">
            <input
              type="text"
              placeholder="Enter your name"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Enter you email"
              className="contact-input"
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Leave a message for us"
              className="contact-input"
            ></textarea>
            <Button name={"Submit"} />
          </div>
        </div>
      </div>
      <Footer />
      {/* <div>
        <ReactWhatsapp number="9458431173" message="Hello World!!!" />
      </div> */}
    </div>
  );
};

export default ContactUs;
