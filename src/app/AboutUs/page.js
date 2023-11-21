import Link from "next/link";
import "../about.css";

const AboutUsPage = () => {
  return (
    <div className="about-US-page">
      <div className="div">
        <div className="overlap">
        <Link href="/"> <img
              className="graystone-white"
              alt="Graystone white"
              src="https://c.animaapp.com/6h31uVPj/img/graystone-white-1@2x.png"
            /> </Link>
          <div className="group">
            <p className="text-wrapper">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
          <div className="overlap-group">
            <img className="ig-white" alt="Ig white" src="https://c.animaapp.com/iUpDz7wD/img/ig-white@2x.png" />
          </div>
          <div className="facebook-white-wrapper">
            <img
              className="facebook-white"
              alt="Facebook white"
              src="https://c.animaapp.com/iUpDz7wD/img/facebook-white@2x.png"
            />
          </div>
          <div className="group-2">
            <Link href="AboutUs"><div className="text-wrapper-2">About Us</div></Link>
            <Link href="ContactUs"><div className="text-wrapper-3">Contact Us</div></Link>
            <Link href="Property"><div className="text-wrapper-4">Property</div></Link>
            

            
          </div>
        </div>
        <div className="ellipse" />
        <div className="overlap-2">
          <div className="ellipse-2" />
          <p className="greyston-luxury">
            <span className="span">Greyston</span>
            <span className="text-wrapper-5">
              {" "}
              Luxury Developments is a privately owned, luxury residential developer, specialising in building the
              finest bespoke properties set within stunning rural locations in the commuter belt countryside.
              <br />
              <br />
              We pride ourselves in designing the most unique homes that showcase traditional architecture, the finest
              craftsmanship utilising the highest quality materials, innovative technology, all meticulously finished to
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
              Whether you’d like to discuss one of our projects, enquire about our bespoke service or assistance in
              finding land to build on, we would be delighted to hear from you.
              <br />
            </span>
          </p>
        </div>
        <p className="p">
          Greytone Luxury Developments create the finest bespoke homes across Buckinghamshire and The Home Counties.
        </p>
        <div className="overlap-group-wrapper">
          <div className="div-wrapper">
            <Link href="/ContactUs"><div className="text-wrapper-6">Contact us</div> </Link>
          </div>
        </div>
        <div className="group-3">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/iUpDz7wD/img/rectangle-2.png" />
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/iUpDz7wD/img/rectangle-3.png" />
          <img className="rectangle-2" alt="Rectangle" src="https://c.animaapp.com/iUpDz7wD/img/rectangle-4.png" />
        </div>
        <div className="overlap-3">
          <div className="group-4">
            <p className="text-wrapper-7">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
          <img className="logo" alt="Logo" src="https://c.animaapp.com/iUpDz7wD/img/logo-1-2@2x.png" />
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper-8">
                © 2023 Rosewood Luxury Developments | All Rights Reserved.
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-8">Website Terms | Privacy Policy | Cookie Preferences</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsPage
