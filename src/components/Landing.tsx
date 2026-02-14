import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.personalDetails.name.split(" ");
  const firstName = nameParts[0] || config.personalDetails.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{config.personalDetails.role}</div>
              <div className="landing-h2-2">Software Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.skills.develop.title}</div>
              <div className="landing-h2-info-1">Full-Stack Developer</div>
            </h2>
          </div>

        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
