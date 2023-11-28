import "./property.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

let images = [
  {url:"https://c.animaapp.com/29Yj1tFZ/img/rectangle-6-1.png",page:"/Project1"},
  {url:"https://c.animaapp.com/29Yj1tFZ/img/rectangle-7-1.png",page:"/Project1"},
  {url:"https://c.animaapp.com/29Yj1tFZ/img/rectangle-6.png",page:"/Project1"},
  {url:"https://c.animaapp.com/29Yj1tFZ/img/rectangle-7.png",page:"/Project1"},
];
const ProjectProperty = () => {
  return (
    <div>
      <div className="property__wrapper">
        <Navbar />
        <div className="property__content">
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
      <div className="property__text">
        <h3>Projects</h3>
        <br />
        <div className="image__grid">
          {images.map((image, index) => (
            <div key={index} className="image__element">
              <img src={image.url} alt={index} />
              <Link href={image.page}><div className="learn__more__btn">Learn More</div></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectProperty;

