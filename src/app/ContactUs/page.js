
import Link from "next/link";
import "../contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="div">
        <div className="overlap">
          <div className="group">
          <Link href="AboutUs"><div className="text-wrapper">About Us</div></Link>
          <Link href="ContactUs"><div className="text-wrapper-2">Contact Us</div></Link>
          <Link href="Property"><div className="text-wrapper-3">Property</div></Link>
            
          </div>
          <img
            className="graystone-white"
            alt="Graystone white"
            src="https://c.animaapp.com/6h31uVPj/img/graystone-white-1@2x.png"
          />
          <div className="group-2">
            <p className="p">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
        </div>
        <div className="ellipse" />
        <div className="ellipse-2" />
        <p className="text-wrapper-4">
          Should you require further assistance or wish to enquire about any future projects, please contact us via the
          details below.
        </p>
        
        <div className="group-3">
          <div className="text-wrapper-6">Email:</div>
          <div className="text-wrapper-7">enquiries@greystone.com</div>
        </div>
        <div className="group-4">
          <div className="text-wrapper-8 text-wrapper text-2xl font-bold text-gray-700">Phone Number:</div>
          <div className="text-wrapper-9">565656565643</div>
        </div>
        <div className="text-wrapper-5">Registered Address:</div>
        <p className="text-wrapper-10">22 Wycombe End, Beaconsfield, Buckinghamshire, HP9 1NB</p>
        <img className="img" alt="Group" src="https://c.animaapp.com/6h31uVPj/img/group-4.png" />
        <div className="overlap-group">
          <div className="div-wrapper">
            <p className="text-wrapper-11">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
          <img className="logo" alt="Logo" src="https://c.animaapp.com/6h31uVPj/img/logo-1-2@2x.png" />
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                © 2023 Rosewood Luxury Developments | All Rights Reserved.
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">Website Terms | Privacy Policy | Cookie Preferences</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs
