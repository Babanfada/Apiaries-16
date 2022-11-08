import React, { useEffect } from "react";
import AOS from "aos";
import { Button } from "react-bootstrap";
import image from "../../images/image_1.png";
import image2 from "../../images/small-image-1.png";
import image6 from "../../images/small-image-6.png";
import image7 from "../../images/small-image-3.png";
import image8 from "../../images/small-image-5.png";
import image9 from "../../images/small-image-2.png";
import image10 from "../../images/working-bees.jpg";
import image11 from "../../images/women.jpg";
import image12 from "../../images/young.jpg";
import image13 from "../../images/working-bees.jpg";
import image14 from "../../images/bee1.jpg";
import image15 from "../../images/bee2.jpg";
import image16 from "../../images/bee3.jpg";
import image17 from "../../images/bee4.jpg";
import image18 from "../../images/Honey-removebg-preview.png";
import image19 from "../../images/propolis-bee-removebg-preview.png";
import image20 from "../../images/bee-pollen-in-a-pot-removebg-preview.png";
import image5 from "../../images/image_2.jpg";
import image3 from "../../images/image_3.jpg";
import image4 from "../../images/image_4.jpg";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./home.css";
import Cards from "../Cards/Cards";
import ProductComponent from "../../ProductComponent/ProductComponent";
import Testimonial from "../../Testimonial/Testimonial";
import Customer from "../../Customer/Customer";
import Carousel from "../../ReusedComponent/Carousel";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

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
    }
  ];
  const products = [
    {
      productImg: image18,
      title: "Natural Honey",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur repellat esse ab illum! Consectetur voluptate eacommodi a dolorem ut nulla ex explicabo repudiandae iusto corporis",
      price: "$10",
      className: "col-md-3 data",
      dataAos: "slide-up",
      dataAosdelay: "1000"
    },
    {
      productImg: image19,
      title: "Bee Pollen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur repellat esse ab illum! Consectetur voluptate eacommodi a dolorem ut nulla ex explicabo repudiandae iusto corporis",
      price: "$20",
      className: "col-md-3 data",
      dataAos: "zoom-out",
      dataAosdelay: "2000"
    },
    {
      productImg: image20,
      title: "Bee Propolis",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemsuscipit, pariatur repellat esse ab illum! Consectetur voluptate eacommodi a dolorem ut nulla ex explicabo repudiandae iusto corporis",
      price: "$30",
      className: "col-md-3 data",
      dataAos: "zoom-in",
      dataAosdelay: "3000"
    }
  ];
  return (
    <div className="home container-fluid">
      {/* .......section 1.......... */}
      <img src={image2} className="small-image-1" alt=""></img>
      <div data-aos="zoom-in-right" className="row rowContainer">
        <div className="fresh col-sm-6">
          <h5>Fresh benefit from nature</h5>
          <h1>Organic Honey and Beekeeping</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            impedit soluta exercitationem optio laborum accusantium maiores
            saepe perferendis placeat eaque. Assumenda aperiam laboriosam, saepe
            est atque obcaecati nihil quasi nulla?
          </p>
          <Link to="/Gallery">
            <Button variant="warning" className="button">
              View More
            </Button>
          </Link>
        </div>

        <div className="pic col-sm-6">
          <img src={image} alt=""></img>
          <img src={image6} className="small-image-6" alt=""></img>
        </div>
      </div>
      {/* .......section 2......... */}
      <div className="row comtainer-fluid rowContainer second">
        <div data-aos="fade-right" className="bees col-md-5">
          <img
            data-aos="zoom-out-right"
            data-aos-delay="500"
            className="polygon"
            src={image3}
            alt="image5"
          />
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            className="polygon"
            src={image4}
            alt="image6"
          />
          <img
            data-aos="slide-in-right"
            data-aos-delay="500"
            className="polygon"
            src={image5}
            alt="image7"
          />
        </div>

        <div className="col-md-1"></div>

        <div data-aos="slide-left" className="pic  col-md-5 honey">
          <h1 data-aos="fade-left" data-aos-delay="500">
            What are <span>Honey Bees ?</span>
          </h1>
          <p data-aos="fade-left" data-aos-delay="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloribus at ex similique aspernatur error accusamus voluptatibus
            possimus eius expedita, consequatur vero quisquam consectetur magni
            aliquam sunt qui officiis nihil exercitationem molestias veniam
            voluptas tempora. Ipsa in quaerat facere facilis!
          </p>
          <div className="method">
            <div data-aos="fade-left" data-aos-delay="1200" className="icon1 ">
              <img src={image7} alt="image5" />
              <h3>Eco Friendly Method</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="1500"
              className="icon1 icon"
            >
              <img src={image9} alt="image5" />
              <h3>Organic Natural Honey </h3>
            </div>
            <div data-aos="fade-left" data-aos-delay="1700" className="icon1">
              <img src={image2} alt="image5" />
              <h3>Healthy Bees Population</h3>
            </div>
          </div>
        </div>
      </div>
      {/* .........section 3...... */}
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

      {/* .............Section 4 ............ */}
      <div className="container-md newsletter">
        <div className="containing row">
          <div
            data-aos="fade-down"
            data-aos-delay="1000"
            className="join col-md-5"
          >
            <h1 data-aos="zoom-down" data-aos-delay="1000">
              Join Our <span>Newsletter</span>
            </h1>
            <p data-aos="fade-downzoom-in-right" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              debitis esse dolorum sit nemo culpa ea ratione atque maiores
              similique. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Nihil sit similique incidunt aliquam modi unde blanditiis
              molestias pariatur quod?
            </p>
            <div
              data-aos="zoom-out"
              data-aos-delay="1000"
              className="input_sec"
            >
              <input
                type="text"
                name="input"
                id="input"
                placeholder="Email Address....."
              />
              <Button
                data-aos="fade-down"
                data-aos-delay="1000"
                className="button"
                variant={"warning"}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="col-md-1">hidden</div>
          <div
            data-aos="fade-left"
            data-aos-delay="700"
            className="join-img col-md-6"
          >
            <img src={image13} alt="potrait" />
          </div>
        </div>
      </div>
      {/* ................Section 5......... */}
      <div data-aos="zoom-right" className="containergrid container-md">
        <div data-aos="fade-right" className="importance Area1 ">
          <h1>
            importance of Bees in <span>our Ecosystem</span>
          </h1>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="1000"
          className="importance Area2 "
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          consequuntur pariatur omnis possimus ullam. Saepe aliquid dolores,
          quia praesentium aspernatur odit nisi adipisci necessitatibus incidunt
          harum explicabo veniam facere dolor nemo suscipit ipsa ratione
          voluptas a tempora quos cupiditate? Natus quaerat tempora iure, magni
          ipsum mollitia suscipit modi tempore nihil.
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          className="importance Area3"
        >
          <img src={image16} alt="potrait" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="1000"
          className="importance Area4"
        >
          <img src={image17} alt="potrait" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          className="importance Area5"
        >
          <img src={image14} alt="potrait" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="1000"
          className="importance Area6"
        >
          <img src={image15} alt="potrait" />
        </div>
      </div>
      {/* ............Section 6......... */}
      <div
        data-aos="zoom-in"
        data-aos-delay="1000"
        className="product container-md"
      >
        <h1 data-aos="fade-down">
          Our <span>Products</span>
        </h1>
        <p data-aos="fade-in" data-aos-delay="500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          suscipit, pariatur repellat esse ab illum! Consectetur voluptate ea
          commodi a dolorem ut nulla ex explicabo repudiandae iusto corporis
          quos quia, deserunt, expedita, neque similique beatae? Accusantium
          perferendis facere animi labore.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="row productcomponent"
        >
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
      {/* ......Section 7...... */}

      <div
        data-aos="slide-up"
        data-aos-delay="1000"
        className="section7 container-md"
      >
        <div data-aos="slide-right" data-aos-delay="1000" className="testimage">
          <img src={image16} alt="potrait" />
        </div>
        <div data-aos="slide-left" data-aos-delay="1000" className="client">
          <p>Testimonial</p>
          <h1>Client Testimonial</h1>
          <Customer picture={[image11, image12, image13, image15, image16]} />
        </div>
      </div>
      {/* ....Section 8...... */}
      <div data-aos="fade-in" data-aos-delay="2000">
        <Testimonial
          data-aos="fade-in"
          content={[image11, image12, image13, image15, image16]}
        />
      </div>
      {/* <Carousel /> */}
    </div>
  );
};

export default Home;
