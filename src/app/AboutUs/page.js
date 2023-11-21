"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import "../about.css";

const AboutUsPage = () => {
  return (
    <motion.div
      className="about-US-page"
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
            src="https://c.animaapp.com/iUpDz7wD/img/graystone-white-1@2x.png"
            whileHover={{ scale: 1.1 }}
          />
          <div className="group">
            <p className="text-wrapper">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
          <div className="overlap-group">
            <motion.img
              className="ig-white"
              alt="Ig white"
              src="https://c.animaapp.com/iUpDz7wD/img/ig-white@2x.png"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <div className="facebook-white-wrapper">
            <motion.img
              className="facebook-white"
              alt="Facebook white"
              src="https://c.animaapp.com/iUpDz7wD/img/facebook-white@2x.png"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <div className="group-2">
            <Link href="AboutUs">
              <motion.div
                className="text-wrapper-2"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                About Us
              </motion.div>
            </Link>
            <Link href="ContactUs">
              <motion.div
                className="text-wrapper-3"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Contact Us
              </motion.div>
            </Link>
            <Link href="Property">
              <motion.div
                className="text-wrapper-4"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Property
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="ellipse" />
        <div className="overlap-2">
          <div className="ellipse-2" />
          <motion.p
            className="greyston-luxury"
            whileHover={{ scale: 1.05 }}
          >
            <span className="span">Greyston</span>
            <span className="text-wrapper-5">
              {" "}
              Luxury Developments is a privately owned, luxury residential developer, specializing in building the
              finest bespoke properties set within stunning rural locations in the commuter belt countryside.
              <br />
              <br />
              We pride ourselves in designing the most unique homes that showcase traditional architecture, the finest
              craftsmanship utilizing the highest quality materials, innovative technology, all meticulously finished to
              the highest standards.
              <br />
              <br />
            </span>
            <span className="span">Greyston</span>
            <span className="text-wrapper-5">
              {" "}
              Bespoke undertakes bespoke private client projects, from drawing and planning stages, right the way
              through to choosing the brassware in your bathroom. Rosewood Bespoke is our expert turn key service for
              delivering you your dream home.
              <br />
              <br />
              Whether you’d like to discuss one of our projects, inquire about our bespoke service or assistance in
              finding land to build on, we would be delighted to hear from you.
              <br />
            </span>
          </motion.p>
        </div>
        <motion.p
          className="p"
          whileHover={{ scale: 1.1, color: "#ff8c00" }}
        >
          Greytone Luxury Developments create the finest bespoke homes across Buckinghamshire and The Home Counties.
        </motion.p>
        <div className="overlap-group-wrapper">
          <div className="div-wrapper">
            <Link href="/ContactUs">
              <motion.div
                className="text-wrapper-6"
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
              >
                Contact us
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="group-3">
          <motion.img
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/iUpDz7wD/img/rectangle-2.png"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            className="img"
            alt="Rectangle"
            src="https://c.animaapp.com/iUpDz7wD/img/rectangle-3.png"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            className="rectangle-2"
            alt="Rectangle"
            src="https://c.animaapp.com/iUpDz7wD/img/rectangle-4.png"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="overlap-3">
          <div className="group-4">
            <motion.p
              className="text-wrapper-7"
              whileHover={{ scale: 1.1, color: "#ff8c00" }}
            >
              DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS
            </motion.p>
          </div>
          <motion.img
            className="logo"
            alt="Logo"
            src="https://c.animaapp.com/iUpDz7wD/img/logo-1-2@2x.png"
            whileHover={{ scale: 1.1 }}
          />
          <div className="flexcontainer">
            <motion.p className="text">
              <span className="text-wrapper-8">
                © 2023 Rosewood Luxury Developments | All Rights Reserved.
                <br />
              </span>
            </motion.p>
            <motion.p className="text">
              <span className="text-wrapper-8">Website Terms | Privacy Policy | Cookie Preferences</span>
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;