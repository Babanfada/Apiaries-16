import React from "react";
import { Button } from "react-bootstrap";
import image from "../../images/image_1.png";
import image2 from "../../images/small-image-1.png";
import image6 from "../../images/small-image-6.png";
import image7 from "../../images/small-image-3.png";
import image8 from "../../images/small-image-5.png";
import image9 from "../../images/small-image-2.png";

import image5 from "../../images/image_2.jpg";
import image3 from "../../images/image_3.jpg";
import image4 from "../../images/image_4.jpg";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home container-fluid">
      <img src={image2} className="small-image-1"></img>
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
            <Button variant="warning">View More</Button>{" "}
          </Link>
        </div>

        <div className="pic col-sm-6">
          <img src={image}></img>
          <img src={image6} className="small-image-6"></img>
        </div>
      </div>

      <div className="row comtainer-fluid rowContainer second">
        <div className="bees col-md-6">
          <img className="polygon" src={image3} alt="image5" />
          <img className="polygon" src={image4} alt="image6" />
          <img className="polygon" src={image5} alt="image7" />
        </div>

        <div className="pic col-md-6 honey">
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
    </div>
  );
};

export default Home;
