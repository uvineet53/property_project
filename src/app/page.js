"use client"

import Link from "next/link";
import "./try.css"

const  HomePage = () => {

  return (
    <div className="home-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="graystone-white"
            alt="Graystone white"
            src="https://c.animaapp.com/q5aj6oWM/img/graystone-white-1@2x.png"
          />
          <div className="group">
           <Link href="/AboutUs"><div className="text-wrapper">About Us</div></Link> 
           <Link href="/ContactUs"> <div className="div">Contact Us</div> </Link>
           <Link href="/Property"><div className="text-wrapper-2">Property</div></Link> 
          </div>
          <div className="overlap">
            <img className="ig-white" alt="Ig white" src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png" />
          </div>
          <div className="facebook-white-wrapper">
            <img
              className="facebook-white"
              alt="Facebook white"
              src="https://c.animaapp.com/q5aj6oWM/img/facebook-white@2x.png"
            />
          </div>
          <div className="group-2">
            <img
              className="rosewood-building"
              alt="Rosewood building"
              src="https://c.animaapp.com/q5aj6oWM/img/rosewood-building-luxury-1.png"
            />
            <p className="p">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage
