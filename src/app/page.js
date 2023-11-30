"use client";

import Link from "next/link";
import "./homepage.css";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div className="homepage__wrapper">
      <Navbar />
      <div className="homepage__content">
        <img
          className="homepage__text"
          alt="Rosewood building"
          src="https://c.animaapp.com/q5aj6oWM/img/rosewood-building-luxury-1.png"
        />
        <p>DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
      </div>

      <div className="social__logos">
        <img
          className="social__logo"
          alt="Ig white"
          src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"
        />

        <img
          className="social__logo"
          alt="Facebook white"
          src="https://c.animaapp.com/q5aj6oWM/img/facebook-white@2x.png"
        />
      </div>
    </div>
  );
};
export default HomePage;
