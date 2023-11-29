
import "./project.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div>
      <div className="project__wrapper">
        <Navbar />
        <div className="project__content">
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

      <div className="project-details">
        <div className="project-details__section">
          <div className="project-details__text">
            <h2 className="project-details__title">About Nishava Residence</h2>
            <p className="project-details__description">
              The exterior features a contrast of white ceramic tiles and dark
              gray vertical grid. The French windows reveal an incredible urban
              landscape overlooking Sofia and the Vitosha mountain as a
              backdrop.
            </p>
            <br />
            <p className="project-details__address">
              <span className="project-details__label">Address:</span><br /> st.
              Nishava 97, nbhd. Strelbishte, Sofia <br /><br />
              <span className="project-details__label">Type:</span><br /> Residential
              building <br /><br />
              <span className="project-details__label">
                Level of completion:
              </span><br />
              Rough construction <br /><br />
              <span className="project-details__label">Year:</span><br /> 2024
            </p>
          </div>
          <img
            className="project-details__img1"
            src="https://imgur.com/GuS0crp.png"
            alt="Rectangle"
          />
        </div>

        <div className="project-details__section">
          <img
            className="project-details__img1"
            src="https://imgur.com/U1qk9zN.png"
            alt="Rectangle"
          />

          <div className="project-details__text">
            <h2 className="project-details__title">Details</h2>
            <br />
            <p className="project-details__common-areas">
              <span className="project-details__label">Common areas:</span>{" "}
              Finished with first-quality granite tiles.
            </p>
            <br />
            <p className="project-details__staircase">
              <span className="project-details__label">Staircase:</span>{" "}
              Finished with first-quality granite tiles. <br /> 
              Glass railing according
              to architectural detail. <br /> Designer lighting according to
              architectural detail.
            </p>
            <Link href="/ContactUs">
              <div className="project-details__link">Contact us</div>
            </Link>
          </div>
        </div>

        <h2 className="project-details__title">Heating and Ventilation</h2>
        <br />
        <div className="project-details__section">
          <div style={{ flex: "1"}}>
            <div>
              <img
                className="project-details__logo"
                src="https://c.animaapp.com/6KikUNbp/img/image-4@2x.png"
                alt="Image"
              />

              <p>
                The heating in the building is centrally provided by
                Toplofikatsiya AD. All rooms in all apartments are equipped with
                underfloor heating, ensuring comfort, cleanliness, and
                spaciousness.
              </p>
            </div>
            <br />
            <div>
              <img
                className="project-details__logo"
                src="https://c.animaapp.com/6KikUNbp/img/image-2@2x.png"
                alt="Image"
              />
              <p>Air conditioning ducts are provided in all rooms.</p>
            </div>
            <Link href="/ContactUs">
              <div className="project-details__link">Contact us</div>
            </Link>
          </div>

          <div style={{ flex: "1"}}>
            <img
              className="project-details__logo"
              src="https://c.animaapp.com/6KikUNbp/img/image-3@2x.png"
              alt="Image"
            />

            <p>
              The ventilation system includes heat recovery units. The
              high-quality air flow is ensured by the latest generation of
              energy-efficient MVHR systems. In each room, the purified air with
              HEPA (PM2.5) level circulates while providing heating and cooling.
              With these systems, 93% of the heat is retained in the building,
              significantly reducing utility bills by several thousand lev per
              year.
            </p>
          </div>
        </div>

        <img
          className="project-details__cover__img"
          src="https://imgur.com/2FK0K8n.png"
          alt="Rectangle"
        />

        <h2 className="project-details__title">Advantages and Comfort</h2>
        <br />
        <div className="project-details__section">
          
            <div className="project-details__description">
              <img
                className="project-details__logo"
                src="https://c.animaapp.com/6KikUNbp/img/image-5@2x.png"
                alt="Image"
              />

              <p>
                When designing "Nishava Residence", a key priority was to
                provide residents with the advantage of natural day-night
                cycles. French windows flood all homes with daylight.
              </p>
              <Link href="/ContactUs">
                <div className="project-details__link">Contact us</div>
              </Link>
            </div>
            <div className="project-details__description">
              <img
                className="project-details__logo"
                src="https://c.animaapp.com/6KikUNbp/img/image-6@2x.png"
                alt="Image"
              />

              <p>
                Few people realize that sound is one of the biggest sources of
                stress in the city. External noises are minimized thanks to
                high-quality double-glazed windows and a ventilated facade.
              </p>
            </div>
          
        </div>

        <div className="project-details" style={{alignItems: "center"}}>
          <h2 className="project-details__title" style={{textAlign: "center"}}>More from Our Projects</h2>
          <br />
          <img
            className="project-details__rectangle"
            src="https://imgur.com/QNMewpo.png"
            alt="Rectangle"
            style={{width: "80vw", maxHeight: "50vh", objectFit: "cover"}}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ProjectPage;
