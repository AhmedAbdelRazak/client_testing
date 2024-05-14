import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-quill/dist/quill.snow.css";
import Home from "./pages/Home";
import NavbarTop from "./components/Navbar1/NavbarTop";
import NavbarBottom from "./components/Navbar1/NavbarBottom";
import Navbar2 from "./components/Navbar2/Navbar2";

//Admin Management

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavbarTop />
      <NavbarBottom />
      <Navbar2 />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
