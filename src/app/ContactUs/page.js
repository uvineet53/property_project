import "./contactUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <div>
      <div className="contact__wrapper">
        <Navbar />
        <div className="contact__content">
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

      <div className="contact__text">
        <div className="contact__message">
          <h4>
            Should you require further assistance or wish to enquire about any
            future projects, please contact us via the details below.
          </h4>
          <br />
          <br />
          <div>
            <h4>Email:</h4>
            <h4>enquiries@greystone.com</h4>
          </div>
          <br />

          <div>
            <h4>Registered Address:</h4>
            <h4>71-75 Shelton Street, London, England, WC2H 9JQ</h4>
          </div>
        </div>

        <div className="map">
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
      </div>
      <Footer/>
    </div>
  );
};
export default ContactUs;
