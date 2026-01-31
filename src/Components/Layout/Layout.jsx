import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop/ScrollTop";

export default function Layout() {
  return (
    <>
      <ScrollTop />
      <div className="mb-14">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
