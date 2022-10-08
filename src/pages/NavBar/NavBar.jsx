import React, { useState } from "react";
import Honey from "../../images/my images/apiaries_16.jpg";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { RiSearchLine, RiArrowDropDownFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

const NavBar = () => {
  const mystyle = {
    textDecoration: "none"
  };
  const [isNavShowing, setisNavShowing] = useState(false);
  const [isInputShowing, setisInputShowing] = useState(false);

  const showList = () => {
    setisNavShowing(!isNavShowing);
  };
  const showInputBar = event => {
    setisInputShowing(!isInputShowing);
  };
  // const hideList = () => {
  //   setisNavShowing(isNavShowing);
  // };

  return (
    <nav className="navbar container-sm">
      <div className="container mycontainer">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={Honey} alt="Logo" />
          Apiaries 16
        </Link>

        <ul className={`list__items ${isNavShowing ? "hideList" : "showList"}`}>
          <NavLink activeClassName="acitve" className="navlink" to="/">
            <li>Home</li>
          </NavLink>

          <NavLink activeClassName="acitve" className="navlink" to="/About">
            <li className="position">
              About Us <RiArrowDropDownFill />
              <ul>
                <NavLink style={mystyle} activeClassName="active" to="/Team">
                  <li>Team</li>
                </NavLink>
                <NavLink
                  style={mystyle}
                  activeClassName="active"
                  to="/Community"
                >
                  <li>Community</li>
                </NavLink>
              </ul>
            </li>
          </NavLink>

          <NavLink activeClassName="acitve" className="navlink" to="/Product">
            <li>Products</li>
          </NavLink>
          <NavLink activeClassName="acitve" className="navlink" to="/Story">
            <li className="position">
              Story <RiArrowDropDownFill />
              <ul className="gallery">
                <NavLink style={mystyle} activeClassName="active" to="/Gallery">
                  <li>Gallery</li>
                </NavLink>
                <NavLink style={mystyle} activeClassName="active" to="/faqs">
                  <li>FAQ</li>
                </NavLink>
              </ul>
            </li>
          </NavLink>
          <NavLink activeClassName="acitve" className="navlink" to="/Contact">
            <li>Contact Us</li>
          </NavLink>
        </ul>

        <div className="input">
          <input
            type="text"
            id="search__bar"
            placeholder="search..."
            // className={`${isInputShowing ? "hideList" : "showList"}`}
          />

          {/* <input
            type="text"
            id= "search__bar"
            placeholder="search..."
          /> */}
          <Button type="submit" onClick={showInputBar}>
            <RiSearchLine className="lens" />
          </Button>
        </div>
        {isNavShowing ? (
          <FaRegWindowClose className="menu" onClick={showList} />
        ) : (
          <CgMenuGridR className="menu" onClick={showList} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
