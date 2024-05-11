import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-quill/dist/quill.snow.css";
import Home from "./pages/Home";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

//Admin Management

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavbarTop />
      <NavbarBottom />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
