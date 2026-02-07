import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {config.personalDetails.bio.long}
        </p>
      </div>
    </div>
  );
};

export default About;
