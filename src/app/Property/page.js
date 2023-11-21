"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import "../property.css";

const ProjectProperty = () => {
  return (
    <motion.div
      className="project-property"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="div">
        <div className="overlap">
          <motion.img
            className="graystone-white"
            alt="Graystone white"
            src="https://c.animaapp.com/29Yj1tFZ/img/graystone-white-1@2x.png"
            whileHover={{ scale: 1.1 }}
          />
          <div className="group">
            <div className="group-2">
              <Link href="AboutUs">
                <motion.div
                  className="text-wrapper"
                  whileHover={{ scale: 1.1, color: "#ff8c00" }}
                >
                  About Us
                </motion.div>
              </Link>
              <Link href="ContactUs">
                <motion.div
                  className="text-wrapper-2"
                  whileHover={{ scale: 1.1, color: "#ff8c00" }}
                >
                  Contact Us
                </motion.div>
              </Link>
              <Link href="Property">
                <motion.div
                  className="text-wrapper-3"
                  whileHover={{ scale: 1.1, color: "#ff8c00" }}
                >
                  Property
                </motion.div>
              </Link>
            </div>
            <p className="p">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
        </div>
        <footer className="footer">
          <div className="overlap-group">
            <div className="div-wrapper">
              <motion.p
                className="text-wrapper-4"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS
              </motion.p>
            </div>
            <motion.img
              className="logo"
              alt="Logo"
              src="https://c.animaapp.com/29Yj1tFZ/img/logo-1-2@2x.png"
              whileHover={{ scale: 1.1 }}
            />
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  © 2023 Rosewood Luxury Developments | All Rights Reserved.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  Website Terms | Privacy Policy | Cookie Preferences
                </span>
              </p>
            </div>
          </div>
        </footer>
        <div className="text-wrapper-5">Project</div>
        <div className="group-3">
          <motion.img
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-6-1.png"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            className="img"
            alt="Rectangle"
            src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-7-1.png"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="group-4">
          <motion.img
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-6.png"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            className="img"
            alt="Rectangle"
            src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-7.png"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <Link href="Project1">
              <motion.div
                className="text-wrapper-6"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Learn More
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <Link href="Project1">
              <motion.div
                className="text-wrapper-6"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Learn More
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="group-5">
          <div className="overlap-2">
            <Link href="Project1">
              <motion.div
                className="text-wrapper-6"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Learn More
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="group-6">
          <div className="overlap-2">
            <Link href="Project1">
              <motion.div
                className="text-wrapper-6"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Learn More
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectProperty;
