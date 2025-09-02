import React from "react";
import { Outlet, Link } from "react-router-dom";

import Navbar from "../components/layout/public/Navbar";
import Footer from "../components/layout/public/Footer";

import Home from "../pages/public/Home";
import About from "../pages/public/About";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
