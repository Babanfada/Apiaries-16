import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./index.css";
import React from "react";
import About from "./pages/About/About";
import Community from "./pages/Community/Community";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Faqs from "./pages/FAQS/Faqs";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Services from "./pages/Services/Services";
import Story from "./pages/Story/Story";
import Team from "./pages/Team/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
//import Pratice from "./pages/Pratice";

const App = () => {
  return (
    <Router>
      <NavBar />
      {/* <Pratice /> */}
      <Routes>
        <Route index element={<Home />} exact />
        <Route path="/About" element={<About />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
