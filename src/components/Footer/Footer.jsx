import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { LiaFacebook } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  const mapStyles = {
    width: "100%",
    height: "380px",
    marginBottom: "50px",
    marginTop: "50px",
    borderRadius: "2.5rem",
  };
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1101.3000669070436!2d78.7227356902371!3d28.828380627425673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afdae1999f383%3A0x580da00cf643c85b!2sRoyal%20Craft!5e0!3m2!1sen!2sin!4v1714126318510!5m2!1sen!2sin"
        width="600"
        height="450"
        style={mapStyles}
      ></iframe>

      {/* <footer>
        <div className="container-footer">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>
              This is a company section i want to change this thins This is a
              company section i want to change this thins
            </p>
            <ul className="sci">
              <i>
                <a href="#">
                  <FaInstagram />
                </a>
              </i>
              <i>
                <a href="#">
                  <LiaFacebook />
                </a>
              </i>
              <i>
                <a href="#">
                  <SiGmail />
                </a>
              </i>
              <i>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </i>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#"></a>Help
              </li>
              <li>
                <a href="#"></a>Contact
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#"></a>Help
              </li>
              <li>
                <a href="#"></a>Contact
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <span>
                  <FaPhoneAlt />
                </span>
                <p>
                  <a href="#">+66464646464</a>
                </p>
              </li>
              <li>
                <span>
                  <SiGmail />
                </span>
                <p>
                  <a href="#">royalcraft@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright 2024 this is royal craft</p>
      </div> */}

      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block footer-para">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="footer-para">
            <a href="tel:9756989823" className="me-4 text-reset">
              <i className="bi bi-telephone-fill footer-para"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=+91 9756989823"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              // href="https://mail.google.com/mail/?view=cm&fs=1&to=irfankhan@vipcutlery.pro"
              href="#"
              className="me-4 text-reset "
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              // href="https://instagram.com/vip.cutlery?igshid=ZDdkNTZiNTM="
              href="#"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 main-heading">
                  <i className="fas fa-gem me-3"></i>Royal Craft
                </h6>
                <p style={{ textAlign: "justify" }} className="footer-para">
                  All type of Metal and wooden handicrafts items and also home
                  decor, outdoor indoor planters kitchen wear etc
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 main-heading">
                  Top Products
                </h6>
                <p>
                  <Link
                    href="/product-category/BRASS ARTICLE"
                    className="text-reset footer-para"
                  >
                    Call Bell
                  </Link>
                </p>
                <p>
                  <a
                    href="/product-category/ALUMINUM CRAFTED"
                    className="text-reset footer-para"
                  >
                    Wooden Tray
                  </a>
                </p>
                <p>
                  <a
                    href="/product-category/WOODEN CRAFTED"
                    className="text-reset footer-para"
                  >
                    Wall Hanging
                  </a>
                </p>
                <p>
                  <a
                    href="/product-category/CAKE STAND"
                    className="text-reset footer-para"
                  >
                    Tea Coaster
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 main-heading">
                  Contact
                </h6>
                <p className="footer-para">
                  <i className="fas fa-home me-3"></i> Delhi Rd, near bachcha
                  jail, Hulshan ganj, naya gaon, Lakri Fazalpur, Moradabad,
                  Uttar Pradesh 244001
                </p>
                <p className="footer-para">
                  <i className="fas fa-envelope me-3"></i>
                  royalcraftind@gmail.com
                </p>
                <p className="footer-para">
                  <i className="fas fa-phone me-3"></i> +91 8755555175
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 footer-para"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold footer-para" href="">
            www.royalcraftind.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
