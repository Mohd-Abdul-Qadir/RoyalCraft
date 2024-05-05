import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../common/Button/Button";
import { ReactTyped } from "react-typed";
import "./Carousel.css";
import { useEffect } from "react";
function CarouselFadeExample() {
  const gotoBtn = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToVisible = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToVisible) {
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
    <Carousel fade>
      <Carousel.Item>
        {/* 1 first image */}
        <img
          src="/images/banner.jpg"
          width="100%"
          height={920}
          style={{ opacity: "0.8" }}
          className="banner-img"
        />
        <Carousel.Caption className="caption">
          <div
            className="section-hero-data"
            style={{
              position: "relative",
              top: "-10rem",
              justifyContent: "center",
            }}
          >
            <ReactTyped
              className="hero-top-data carousel-data"
              strings={["ROYAL CRAFT"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />

            <h1 className="carousel-heading">Decorate Your Dream Space</h1>
            <p className="carousel-para" style={{ width: "100%" }}>
              Explore our Curated Collections to
            </p>
            <Button name={"Explore Collection"} onClick={gotoBtn} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* 2 second image */}
        <img
          src="/images/banner1.jpg"
          width="100%"
          height={920}
          style={{ opacity: "0.8" }}
          className="banner-img"
        />

        <Carousel.Caption className="caption">
          <div
            className="section-hero-data"
            style={{
              position: "relative",
              top: "-10rem",
              // left: "-50rem",
              justifyContent: "center",
              // color: "black",
            }}
          >
            <ReactTyped
              className="hero-top-data  carousel-data "
              strings={["ROYAL CRAFT"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />

            <h1 className="carousel-heading">Kitchenwares</h1>
            <p className="carousel-para" style={{ width: "100%" }}>
              Explore our Curated Collections to
            </p>
            <Button name={"Explore Collection"} onClick={gotoBtn} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* 3 Third image */}
        <img
          src="/images/banner3.png"
          width="100%"
          height={920}
          style={{ opacity: "0.8" }}
          className="banner-img"
        />

        <Carousel.Caption className="caption">
          <div
            className="section-hero-data"
            style={{
              position: "relative",
              top: "-10rem",
              justifyContent: "center",
            }}
          >
            <ReactTyped
              className="hero-top-data  carousel-data "
              strings={["ROYAL CRAFT"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />

            <h1 className="carousel-heading">Decorate Your Dream Space</h1>
            <p className="carousel-para" style={{ width: "100%" }}>
              Explore our Curated Collections
            </p>
            <Button name={"Explore Collection"} onClick={gotoBtn} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
