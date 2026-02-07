import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    if (!social) return;

    social.querySelectorAll(".social-link-wrapper").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        if (link) {
          link.style.setProperty("--siLeft", `${currentX}px`);
          link.style.setProperty("--siTop", `${currentY}px`);
        }

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section" id="social">
      <div className="social-icons">
        <span className="social-link-wrapper">
          <a
            href={config.personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </span>
        <span className="social-link-wrapper">
          <a
            href={config.personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        {config.personalDetails.twitter && (
          <span className="social-link-wrapper">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={config.personalDetails.twitter}
            >
              <FaXTwitter />
            </a>
          </span>
        )}
        {config.personalDetails.instagram && (
          <span className="social-link-wrapper">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={config.personalDetails.instagram}
            >
              <FaInstagram />
            </a>
          </span>
        )}
      </div>
      <a
        className="resume-button"
        href={config.personalDetails.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
