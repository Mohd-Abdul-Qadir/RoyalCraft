import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../common/Button/Button";
import { ReactTyped } from "react-typed";
import "./Carousel.css";
function CarouselFadeExample() {
  return (
    <Carousel fade style={{ top: "-100px" }}>
      <Carousel.Item>
        {/* 1 first image */}
        <img
          src="/images/banner.jpg"
          width="100%"
          height={920}
          style={{ opacity: "0.8" }}
          className="banner-img"
        />
        <Carousel.Caption>
          <div
            className="section-hero-data"
            style={{
              position: "relative",
              top: "-10rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ReactTyped
              className="hero-top-data carousel-data"
              strings={["ROYAL CRAFT"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />

            <h1 className="carousel-heading">
              Decorate Your Dream Space
              <br />
              With Our Finest Collection
            </h1>
            <p className="carousel-para">
              Explore our Curated Collections to discover the perfect pieces for
              you Unique Vision
            </p>
            <Button name={"Explore Collection"} />
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

        <Carousel.Caption>
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
              Explore our Curated Collections to discover the perfect pieces for
              you Unique Vision
            </p>
            <Button name={"Explore Collection"} />
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

        <Carousel.Caption>
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

            <h1 className="carousel-heading">
              Decorate Your Dream Space
              <br />
              With Our Finest Collection
            </h1>
            <p className="carousel-para" style={{ width: "100%" }}>
              Explore our Curated Collections to discover the perfect pieces for
              you Unique Vision
            </p>
            <Button name={"Explore Collection"} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
