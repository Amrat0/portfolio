import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
const About = ({ about }) => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="aboutContainer">
          <Typography>
            <Typewriter
              options={{
                strings: [about.quote],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
            />
          </Typography>
        </div>
        <div className="aboutContainer2">
          <div>
            <img src={about.avator.url} alt="amrat" className="aboutAvatar" />
            <Typography
              variant="h4"
              style={{
                fontSize: "40px",
                margin: "1vmax 0",
                color: "hsl(219, 48%, 8%)",
                fontFamily: "aboutFont",
                letterSpacing: "4px",
              }}
            >
              {about.name}
            </Typography>
            <Typography style={{ fontSize: "16px" }}>
              <u>{about.title}</u>
            </Typography>
            <Typography
              style={{
                margin: "1vmax 0",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              <Typewriter
                options={{
                  strings: [about.subtitle],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "typewriterpara",
                }}
              />
            </Typography>
            <div className="logo">
              <div className="whatsapp">
                <a href="https://wa.me/3303911241" target="_black">
                  <BsWhatsapp />
                </a>
              </div>

              <div className="instagram">
                <a href="https://www.instagram.com/amuamrat/" target="_black">
                  <BsInstagram />
                </a>
              </div>

              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/amrat-amu/"
                  target="_black"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "900px",
                wordSpacing: "2px",
                textAlign: "right",
                justifyContent: "right",
                letterSpacing: "2px",
                lineHeight: "40px",
              }}
            >
              {about.description}
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
