import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-quill/dist/quill.snow.css";
import Home from "./pages/Home";
// eslint-disable-next-line
import NavbarTop from "./components/Navbar1/NavbarTop";
// eslint-disable-next-line
import NavbarBottom from "./components/Navbar1/NavbarBottom";
// eslint-disable-next-line
import Navbar2 from "./components/Navbar2/Navbar2";
// eslint-disable-next-line
import Navbar3 from "./components/Navbar3/Navbar3";
import Navbar4 from "./components/Navbar4/Navbar4";
import About from "./pages/About";

//Admin Management

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* <NavbarTop />
      <NavbarBottom />
      <Navbar2 /> */}
      {/* <Navbar3 /> */}
      <Navbar4 />
      <Switch>
        <div style={{ minHeight: "1400px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
