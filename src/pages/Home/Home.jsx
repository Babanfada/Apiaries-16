import React from "react";
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

import image5 from "../../images/image_2.jpg";
import image3 from "../../images/image_3.jpg";
import image4 from "../../images/image_4.jpg";
import { Link } from "react-router-dom";
import "./home.css";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <div className="home container-fluid">
      {/* .......section 1.......... */}
      <img src={image2} className="small-image-1" alt=""></img>
      <div className="row rowContainer">
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
            {" "}
            <Button variant="warning" className="button">
              View More
            </Button>{" "}
          </Link>
        </div>

        <div className="pic col-sm-6">
          <img src={image} alt=""></img>
          <img src={image6} className="small-image-6" alt=""></img>
        </div>
      </div>
      {/* .......section 2......... */}
      <div className="row comtainer-fluid rowContainer second">
        <div className="bees col-md-5">
          <img className="polygon" src={image3} alt="image5" />
          <img className="polygon" src={image4} alt="image6" />
          <img className="polygon" src={image5} alt="image7" />
        </div>

        <div className="col-md-1"></div>

        <div className="pic col-md-5 honey">
          <h1>
            What are <span>Honey Bees ?</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloribus at ex similique aspernatur error accusamus voluptatibus
            possimus eius expedita, consequatur vero quisquam consectetur magni
            aliquam sunt qui officiis nihil exercitationem molestias veniam
            voluptas tempora. Ipsa in quaerat facere facilis!
          </p>
          <div className="method">
            <div className="icon1 ">
              <img src={image7} alt="image5" />
              <h3>Eco Friendly Method</h3>
            </div>
            <div className="icon1 icon">
              <img src={image9} alt="image5" />
              <h3>Organic Natural Honey </h3>
            </div>
            <div className="icon1">
              <img src={image2} alt="image5" />
              <h3>Healthy Bees Population</h3>
            </div>
          </div>
        </div>
      </div>
      {/* .........section 3...... */}
      <div className="container-fluid local ">
        <h1>
          Our Local <span>Bee Farm</span>
        </h1>
        <div className="cards row">
          <Cards
            className="col-lg-4"
            name={"Natural Honey"}
            text={
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                sequi atque quos cum aperiam excepturi?
              </p>
            }
            img={image10}
            img2={image9}
          />
          <Cards
            className="col-lg-4"
            name={"Expert Beekeepers"}
            text={
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                sequi atque quos cum aperiam excepturi?
              </p>
            }
            img={image11}
            img2={image8}
          />
          <Cards
            className="col-lg-4"
            name={"Organized Apiary"}
            text={
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                sequi atque quos cum aperiam excepturi?
              </p>
            }
            img={image12}
            img2={image6}
          />
        </div>
      </div>

      {/* .............Section 4 ............ */}
      <div className="container-md newsletter">
        <div className="containing row">
          <div className="join col-md-5">
            <h1>
              Join Our <span>Newsletter</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              debitis esse dolorum sit nemo culpa ea ratione atque maiores
              similique. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Nihil sit similique incidunt aliquam modi unde blanditiis
              molestias pariatur quod?
            </p>
            <div className="input_sec">
              <input
                type="text"
                name="input"
                id="input"
                placeholder="Email Address....."
              />
              <Button className="button" variant={"warning"}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className="col-md-1">hidden</div>
          <div className="join-img col-md-6">
            <img src={image13} alt="" srcset="" />
          </div>
        </div>
      </div>
      {/* ................Section 5......... */}
      <div className="containergrid container-md">
        
          <div className="importance Area1 ">
            <h1>
              importance of Bees in <span>our Ecosystem</span>
            </h1>
          </div>
          <div className="importance Area2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            consequuntur pariatur omnis possimus ullam. Saepe aliquid dolores,
            quia praesentium aspernatur odit nisi adipisci necessitatibus
            incidunt harum explicabo veniam facere dolor nemo suscipit ipsa
            ratione voluptas a tempora quos cupiditate? Natus quaerat tempora
            iure, magni ipsum mollitia suscipit modi tempore nihil. 
          </div>
          <div className="importance Area3">
            <img src={image16} alt="" srcset="" />
          </div>
          <div className="importance Area4">
            <img src={image17} alt="" srcset="" />
          </div>
          <div className="importance Area5">
            <img src={image14} alt="" srcset="" />
          </div>
          <div className="importance Area6">
            <img src={image15} alt="" srcset="" />
          </div>
      
      </div>
    </div>
  );
};

export default Home;
