
import Link from "next/link";
import "../property.css";

const ProjectProperty = () => {
  return (
    <div className="project-property">
      <div className="div">
        <div className="overlap">
        <Link href="/"> <img
              className="graystone-white"
              alt="Graystone white"
              src="https://c.animaapp.com/6h31uVPj/img/graystone-white-1@2x.png"
            /> </Link>
          <div className="group">
            <div className="group-2">
            <Link href="AboutUs"><div className="text-wrapper">About Us</div></Link>
          <Link href="ContactUs"><div className="text-wrapper-2">Contact Us</div></Link>
          <Link href="Property"><div className="text-wrapper-3">Property</div></Link>
            </div>
            <p className="p">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
          </div>
        </div>
        <footer className="footer">
          <div className="overlap-group">
            <div className="div-wrapper">
              <p className="text-wrapper-4">DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
            </div>
            <img className="logo" alt="Logo" src="https://c.animaapp.com/29Yj1tFZ/img/logo-1-2@2x.png" />
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
        </footer>
        <div className="text-wrapper-5">Project</div>
        <div className="group-3">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-6-1.png" />
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-7-1.png" />
        </div>
        <div className="group-4">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-6.png" />
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/29Yj1tFZ/img/rectangle-7.png" />
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
           <Link href="Project1"> <button className="text-wrapper-6">Learn More</button> </Link>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-2">
          <Link href="Project1"> <div className="text-wrapper-6">Learn More</div> </Link>
          </div>
        </div>
        <div className="group-5">
          <div className="overlap-2">
          <Link href="Project1"> <div className="text-wrapper-6">Learn More</div> </Link>
          </div>
        </div>
        <div className="group-6">
          <div className="overlap-2">
          <Link href="Project1"> <div className="text-wrapper-6">Learn More</div> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProperty
