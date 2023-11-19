
import Link from "next/link";
import "../project.css";

const ProjectPage = () => {
  return (
    <div className="project-PAGE">
      <div className="div">
        <div className="overlap">
          <img
            className="graystone-white"
            alt="Graystone white"
            src="https://c.animaapp.com/6KikUNbp/img/graystone-white-1@2x.png"
          />
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
            <img className="logo" alt="Logo" src="https://c.animaapp.com/6KikUNbp/img/logo-1-2@2x.png" />
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
        <div className="group-3">
          <div className="text-wrapper-5">Abbout Nishava Residence</div> <br />
          <p className="address-st-nishava">
            <span className="text-wrapper-6">
              Address
              <br />
            </span>
            <span className="text-wrapper-7">
              st. Nishava 97, nbhd. Strelbishte, Sofia
              <br />
              <br />
            </span>
            <span className="text-wrapper-6">
              Type:
              <br />
            </span>
            <span className="text-wrapper-8">
              Residential building
              <br />
              <br />
            </span>
            <span className="text-wrapper-6">
              Level of completion:
              <br />
            </span>
            <span className="text-wrapper-8">
              Rough construction
              <br />
              <br />
            </span>
            <span className="text-wrapper-6">
              Year:
              <br />
              2024
            </span>
          </p><br />
          <p className="text-wrapper-9 py-7">
            The exterior features a contrast of white ceramic tiles and dark gray vertical grid. The French windows
            reveal an incredible urban landscape overlooking Sofia and the Vitosha mountain as a backdrop.
          </p>
          <img className="mask-group" alt="Mask group" src="https://c.animaapp.com/6KikUNbp/img/mask-group-1.png" />
        </div>
        <div className="group-4">
          <div className="text-wrapper-10">Details</div>
          <p className="common-areas">
            <span className="text-wrapper-11">Common areas:</span>
            <span className="text-wrapper-12">
              {" "}
              Finished with first-quality granite tiles.
              <br />
              <br />
            </span>
            <span className="text-wrapper-11">Staircase:</span>
            <span className="text-wrapper-12">
              {" "}
              Finished with first-quality granite tiles.
              <br />
              Glass railing according to architectural detail. Designer lighting according to architectural detail.
            </span>
          </p>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/6KikUNbp/img/rectangle-9.png" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
            <Link href="/ContactUs"> <div className="text-wrapper-13">Contact us</div> </Link>
            </div>
          </div>
        </div>
        <div className="group-5">
          <div className="text-wrapper-5">Heating and ventilation</div>
          <p className="text-wrapper-14">
            The heating in the building is centrally provided by Toplofikatsiya AD. All rooms in all apartments are
            equipped with underfloor heating, ensuring comfort, cleanliness, and spaciousness.
          </p>
          <p className="the-ventilation">
            The ventilation system includes heat recovery units. The high-quality air flow is ensured by the latest
            generation of energy-efficient MVHR systems. In each room, the purified air with HEPA (PM2.5) level
            circulates while providing heating and cooling. With these systems, 93% of the heat is retained in the
            building, significantly reducing utility bills by several thousand lev per year. More importantly, this
            energy efficiency significantly reduces the building&#39;s carbon footprint.
          </p>
          <p className="text-wrapper-15">Air conditioning ducts are provided in all rooms.</p>
          <img className="image" alt="Image" src="https://c.animaapp.com/6KikUNbp/img/image-2@2x.png" />
          <img className="img" alt="Image" src="https://c.animaapp.com/6KikUNbp/img/image-3@2x.png" />
          <img className="image-2" alt="Image" src="https://c.animaapp.com/6KikUNbp/img/image-4@2x.png" />
          <div className="group-6">
            <div className="overlap-group-2">
             <Link href="/ContactUs"> <div className="text-wrapper-13">Contact us</div> </Link>
            </div>
          </div>
        </div>
        <img className="rectangle-2" alt="Rectangle" src="https://c.animaapp.com/6KikUNbp/img/rectangle-10.png" />
        <div className="group-7">
          <div className="text-wrapper-5">Advantages and comfort</div>
          <p className="when-designing">
            When designing &#34;Nishava Residence&#34;, a key priority was to provide residents with the advantage of
            natural day-night cycles. French windows flood all homes with daylight.
          </p>
          <p className="text-wrapper-16">
            Few people realize that sound is one of the biggest sources of stress in the city. We often overlook it, but
            this constant background noise affects human well-being. External noises are minimized thanks to
            high-quality double-glazed windows and a ventilated facade.
          </p>
          <div className="group-8">
            <div className="overlap-group-2">
            <Link href="/ContactUs"> <div className="text-wrapper-13">Contact us</div> </Link>
            </div>
          </div>
          <img className="image-3" alt="Image" src="https://c.animaapp.com/6KikUNbp/img/image-5@2x.png" />
          <img className="image-4" alt="Image" src="https://c.animaapp.com/6KikUNbp/img/image-6@2x.png" />
        </div>
        <div className="group-9">
          <div className="text-wrapper-17">More from our projects</div>
          <img className="rectangle-3" alt="Rectangle" src="https://c.animaapp.com/6KikUNbp/img/rectangle-11.png" />
        </div>
      </div>
    </div>
  );
};
export default ProjectPage