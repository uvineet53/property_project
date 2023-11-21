"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import "./try.css";

const HomePage = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <motion.img
            className="graystone-white"
            alt="Graystone white"
            src="https://c.animaapp.com/q5aj6oWM/img/graystone-white-1@2x.png"
            whileHover={{ scale: 1.1 }}
          />
          <div className="group">
            <Link href="/AboutUs">
              <motion.div
                className="text-wrapper"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                About Us
              </motion.div>
            </Link>
            <Link href="/ContactUs">
              <motion.div
                className="div"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Contact Us
              </motion.div>
            </Link>
            <Link href="/Property">
              <motion.div
                className="text-wrapper-2"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Property
              </motion.div>
            </Link>
          </div>
          <div className="overlap">
            <motion.img
              className="ig-white"
              alt="Ig white"
              src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <div className="facebook-white-wrapper">
            <motion.img
              className="facebook-white"
              alt="Facebook white"
              src="https://c.animaapp.com/q5aj6oWM/img/facebook-white@2x.png"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <div className="group-2">
            <motion.img
              className="rosewood-building"
              alt="Rosewood building"
              src="https://c.animaapp.com/q5aj6oWM/img/rosewood-building-luxury-1.png"
              whileHover={{ scale: 1.1 }}
            />
            <motion.p
              className="p"
              whileHover={{ scale: 1.1, color: "#ff8c00" }}
            >
              DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
