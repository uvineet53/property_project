import Link from "next/link";
import "../contact.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us">
        <div className="div">
          <div className="overlap">
            <div className="group">
              <Link href="AboutUs">
                <div className="text-wrapper">About Us</div>
              </Link>
              <Link href="ContactUs">
                <div className="text-wrapper-2">Contact Us</div>
              </Link>
              <Link href="Property">
                <div className="text-wrapper-3">Property</div>
              </Link>
            </div>
           <Link href="/"> <img
              className="graystone-white"
              alt="Graystone white"
              src="https://c.animaapp.com/6h31uVPj/img/graystone-white-1@2x.png"
            /> </Link>
            <div className="group-2">
              <p className="p">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
            </div>
          </div>
          <div className="ellipse" />
          <div className="ellipse-2" />
          <p className="text-wrapper-4">
            Should you require further assistance or wish to enquire about any
            future projects, please contact us via the details below.
          </p>

          <div className="group-3">
            <div className="text-wrapper-6">Email:</div>
            <div className="text-wrapper-7">enquiries@greystone.com</div>
          </div>
         
          <div className="text-wrapper-5">Registered Address:</div>
          <p className="text-wrapper-10">
          71-75 Shelton Street, London, England, WC2H 9JQ
          </p> <div className="map">
          <iframe
  className="maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907826319588!2d-0.12615912391896955!3d51.51490701015554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2sShop%2071%2C%20ALG%20ID%20Cards%20t%2Fa%20The%20Lanyard%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1700748897235!5m2!1sen!2sin"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
 </div>
          <div className="overlap-group">
            <div className="div-wrapper">
              <p className="text-wrapper-11">
                DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS
              </p>
            </div>
            <img
              className="logo"
              alt="Logo"
              src="https://c.animaapp.com/6h31uVPj/img/logo-1-2@2x.png"
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
        </div>
      </div>
    </>
  );
};

export default ContactUs;
