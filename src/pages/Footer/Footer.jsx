import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import Honey from "../../images/my images/apiaries_16.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { VscLocation } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { ImMail3 } from "react-icons/im";
import { GiBee, GiBeehive } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="container-fluid footer__container">
      <div className="row">
        <div className="col-md-5 col-sm div1">
          <Link className="navbar-brand brand" to="/">
            <GiBee />
            <GiBeehive />
            {/* <img className="logo logo_footer" src={GiBee} alt="Logo" /> */}
            Apiaries 16
          </Link>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            beatae ullam minus nesciunt est voluptatem sapiente hic aliquid at
            ex.
          </p>

          <div className="icons">
            <a href="https://web.facebook.com/omotolaniia" target="blank">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://twitter.com/apiaries16" target="blank">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com/apiaries16/" target="blank">
              <SiInstagram className="icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCIrZcA8mxJ3ETKxWTO-YuLw"
              target="blank"
            >
              <SiYoutube className="icon" />
            </a>
          </div>
        </div>

        <div className="col-md-2 col-sm">
          <h4>Quick Links</h4>
          <ul>
            <Link className="footer__nav" to="/">
              <li>Home</li>
            </Link>
            <Link className="footer__nav" to="/About">
              <li>About Us</li>
            </Link>
            <Link className="footer__nav" to="/Product">
              <li>Product</li>
            </Link>
            <Link className="footer__nav" to="/Story">
              <li>Story</li>
            </Link>
            <Link className="footer__nav" to="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="col-md-2 col-sm">
          <h4>More Links</h4>
          <ul>
            {/* <Link className="footer__nav" to="/Contact">
              <li>Team</li>
            </Link>
            <Link className="footer__nav" to="/Contact">
              <li>Community</li>
            </Link> */}
            <Link className="footer__nav" to="/Gallery">
              <li>Gallery</li>
            </Link>
            <Link className="footer__nav" to="/Contact">
              <li>Faqs</li>
            </Link>
          </ul>
        </div>
        <div className="col-md-3 col-sm">
          <h4>Contact Info</h4>
          <div className="add">
            <VscLocation />
            <p>No 14 JJC Street, Ikeja Lagos</p>
          </div>
          <div className="add">
            <BsTelephone />
            <p>+2347038626576</p>
          </div>
          <div className="add">
            <ImMail3 />
            <p>apiariessixteen@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="sub__footer row">
        <p className="col-sm">Made with Love By Ibrahim Muhammed Kabeer</p>
        <p className="col-sm">Copyright © 2020. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
