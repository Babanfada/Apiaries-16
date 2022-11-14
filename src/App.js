import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "aos/dist/aos.css";
import React, { createContext, useState } from "react";
import About from "./pages/About/About";
//import Community from "./pages/Community/Community";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Faqs from "./pages/FAQS/Faqs";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Services from "./pages/Services/Services";
import Story from "./pages/Story/Story";
//import Team from "./pages/Team/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import Trier from "./Trier";
import Trier2 from "./Trier2";
import MyStory from "./MyStory";
export const dataContext = createContext();
//import Pratice from "./pages/Pratice";
//The / in the path isnt necessary, will still work regardless;
//the path is also case insensitive;
const App = () => {
  const [data0, setdata0] = useState([]);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);

  return (
    <Router>
      <dataContext.Provider
        value={{ data0, data1, data2, setdata0, setdata1, setdata2 }}
      >
        <NavBar />
        <Routes>
          <Route index element={<Home />} exact />
          <Route path="About" element={<About />}>
            <Route path="Trier" element={<Trier />} />
            <Route path="Trier2" element={<Trier2 />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MyStory/:id" element={<MyStory />} />

          <Route path="*" element={<Error />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Story" element={<Story />} />
        </Routes>
        <Footer />
      </dataContext.Provider>
    </Router>
  );
};

export default App;
