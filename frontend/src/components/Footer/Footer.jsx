import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../../App.css";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
const Footer = () => {
  const handleContactButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography className="typewriterpara2">
          <Typewriter
            options={{
              strings: [
                "↝ FREELANCER.",
                "A Full Stack Developer.",
                "A Creative Designer.",
                "A Classic Creator",
                "Build Dyanamic Webistes. ⇜",
              ],
              autoStart: true,
              loop: true,
              cursor: "〢",
              wrapperClassName: "typewriterpara2",
            }}
          />
        </Typography>
        <p>
          Hey I'm Amrat. I am a Full Stack Developer using{" "}
          <m>MERN Stack Technique</m>.
        </p>
        <Link
          to={"/contact"}
          className="footerContactBtn"
          onClick={handleContactButtonClick}
        >
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Amrat0" target="_black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/amuamrat/" target="_black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/amrat-amu/" target="_black">
          <BsLinkedin />
        </a>
        <a href="jjkk" target="_black">
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
