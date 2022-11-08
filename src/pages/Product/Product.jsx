import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductComponent from "../../ProductComponent/ProductComponent";
import honeycomb from "../../images/honeycomb.png";
import waxframe from "../../images/wax-frame.jpg";
import image8 from "../../images/small-image-5.png";
import image9 from "../../images/small-image-2.png";
import image10 from "../../images/working-bees.jpg";
import image11 from "../../images/women.jpg";
import image12 from "../../images/young.jpg";
import image6 from "../../images/small-image-6.png";
import yellowflower from "../../images/yellowflower.jpg";
import image20 from "../../images/image20.jpg";
import image21 from "../../images/image21.jpg";
import twenty2 from "../../images/22.png";
import twenty3 from "../../images/23.png";
import twenty4 from "../../images/24.png";
import Cards from "../Cards/Cards";
import image18 from "../../images/Honey-removebg-preview.png";
import image19 from "../../images/propolis-bee-removebg-preview.png";
import image202 from "../../images/bee-pollen-in-a-pot-removebg-preview.png";
import image_1 from "../../images/image_1.png";
import Ambrossia from "../../images/Ambrossia.png";
import Carousel from "../../ReusedComponent/Carousel"
import "./product.css";
const Product = () => {
  const contents = [
    {
      name: "Natural Honey",
      text: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          atque quos cum aperiam excepturi?
        </p>
      ),
      img: image10,
      img2: image9,
      dataAos: "fade-right",
      dataAosdelay: "1000",
      className: "col-md-4 data"
    },
    {
      name: "Expert Beekeepers",
      text: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          atque quos cum aperiam excepturi?
        </p>
      ),
      img: image11,
      img2: image8,
      dataAos: "fade-up",
      dataAosdelay: "2000",
      className: "col-md-4 data"
    },
    {
      name: "Organized Apiary",
      text: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          atque quos cum aperiam excepturi?
        </p>
      ),
      img: image12,
      img2: image6,
      dataAos: "fade-left",
      dataAosdelay: "3000",
      className: "col-md-4 data"
    },
    {
      name: "Non Toxic Smoking",
      text: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          atque quos cum aperiam excepturi?
        </p>
      ),
      img: image20,
      img2: twenty2,
      dataAos: "fade-left",
      dataAosdelay: "3000",
      className: "col-md-4 data"
    },
    {
      name: "Floral Flavor",
      text: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          atque quos cum aperiam excepturi?
        </p>
      ),
      img: yellowflower,
      img2: twenty3,
      dataAos: "fade-left",
      dataAosdelay: "3000",
      className: "col-md-4 data"
    },
    {
      name: "Wild Bee Honey",
      text: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          atque quos cum aperiam excepturi?
        </p>
      ),
      img: image21,
      img2: twenty4,
      dataAos: "fade-left",
      dataAosdelay: "3000",
      className: "col-md-4 data"
    }
  ];
  const products = [
    {
      productImg: image18,
      title: "Natural Honey",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur ",
      price: "$10",
      className: "col-md-4 data",
      dataAos: "slide-up",
      dataAosdelay: "1000"
    },
    {
      productImg: image19,
      title: "Bee Pollen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur ",
      price: "$20",
      className: "col-md-4 data",
      dataAos: "zoom-out",
      dataAosdelay: "2000"
    },
    {
      productImg: image202,
      title: "Bee Propolis",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur ",
      price: "$30",
      className: "col-md-4 data",
      dataAos: "zoom-in",
      dataAosdelay: "3000"
    },
    {
      productImg: image_1,
      title: "Honey Comb",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur ",
      price: "$5",
      className: "col-md-4 data",
      dataAos: "slide-up",
      dataAosdelay: "1000"
    },
    {
      productImg: honeycomb,
      title: "Bees Wax",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur ",
      price: "$20",
      className: "col-md-4 data",
      dataAos: "zoom-out",
      dataAosdelay: "2000"
    },
    {
      productImg: Ambrossia,
      title: "Ambrossia Pollen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur ",
      price: "$30",
      className: "col-md-4 data",
      dataAos: "zoom-in",
      dataAosdelay: "3000"
    }
  ];
  return (
    <>
      <div className="container-sm ">
        <div className="row">
          <div data-aos="flip-left" className="col-sm">
            <img src={honeycomb} alt={"draft"} />
          </div>

          {/* <div className="col-sm-1"></div> */}
          <div data-aos="flip-right" className="col-sm">
            <h1 style={{ paddingTop: "20px" }}>SERVICES</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              mollitia libero rem beatae illo omnis vel similique perspiciatis
              minima distinctio aliquam provident veritatis, dolor, cupiditate
              autem odit illum soluta ratione.
            </p>
            <Link to="/Product">
              <Button variant="warning" className="button">
                {" "}
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="container-sm margin">
        <div className="row">
          <div
            style={{ paddingTop: "1vh" }}
            data-aos="fade-down-right"
            className="col-sm"
          >
            <h1>
              High Quality <span>Natural Products</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              mollitia libero rem beatae illo omnis vel similique perspiciatis
              minima distinctio aliquam provident veritatis, dolor, cupiditate
              autem odit illum soluta ratione.
            </p>
          </div>
          <div className="col-sm-1"></div>
          <img
            style={{ paddingTop: "3vh" }}
            data-aos="fade-down-left"
            src={waxframe}
            className="col-sm"
            alt={"draft"}
          />
        </div>
      </div>
      {/* section 2 */}
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className="container-sm  productcomponent"
        style={{ marginTop: "7vh" }}
      >
        <div className="row">
          {products.map((product, index) => {
            return (
              <div
                className={product.className}
                data-aos={product.dataAos}
                data-aos-delay={product.dataAosdelay}
                key={index}
              >
                <ProductComponent product={product} />
              </div>
            );
          })}
        </div>
      </div>
      {/* section 3 */}
      <div data-aos="slide-up" className=" local ">
        <h1 data-aos="fade-down" data-aos-delay="500">
          Our Local <span>Bee Farm</span>
        </h1>
        <div className=" mar">
          <div className="row cards">
            {contents.map((content, index) => {
              return (
                <div
                  data-aos={content.dataAos}
                  data-aos-delay={content.dataAosdelay}
                  className={content.className}
                  key={index}
                >
                  <Cards content={content} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <Carousel />
    </>
  );
};

export default Product;
