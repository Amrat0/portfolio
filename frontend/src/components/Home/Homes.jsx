import React, { useEffect } from "react";
import "../../App.css";
import "./Homes.css";
import gif1 from "../../Images/map1.gif";
import spaceImage from "../../Images/amubg.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Testimonial from "../Testimonial/Testimonial";
import Typewriter from "typewriter-effect";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiBootstrap,
} from "react-icons/si";
import YouTubeCard from "../YouTubeCard/YouTubeCard";
import { MouseOutlined } from "@mui/icons-material";

const Homes = ({ timelines, youtubes, skills }) => {
  // useEffect is liya use kya ha ka animation or effect jo lagae woh bar bar re rendar na ho aik bar chlay
  useEffect(() => {
    return window.addEventListener("scroll", () => {
      const skillsBox = document.getElementById("homeSkillsBox");
      if (skillsBox) {
        if (window.scrollY > 1200) {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
        }
      }
    });
  });

  return (
    <>
      <div className="home">
        <Header />
        <canvas className="homeCanvas"></canvas>

        <div className="homeCanvasContainer ">
          <div className="insideImg ">
            <Typography variant="h2" className="text-left ">
              AMRAT.AMRAT.AMRAT
            </Typography>

            <img src={spaceImage} alt="insideMe" />
          </div>

          <div className="homeCanvasBox">
            <div className="homeCanvasContainer">
              <Link to="/projects" className="countdown-link">
                {" "}
                VIEW WORK{" "}
                <span>
                  <img src={gif1} alt="map"></img>
                </span>
              </Link>
            </div>

            <Typography variant="h2" className="text-right">
              AMRAT.AMU.DEVELOPER
            </Typography>
            <div className="pp">
              <p>
                <Typewriter
                  options={{
                    strings: [
                      "↝ AMRAT AMU.",
                      "INTRECTIVE DESIGNER.",
                      "Provide Special Features .",
                      "Dyanamic Webistes",
                      "Get Industrial Approch.",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "👨‍💻",
                    wrapperClassName: "typewriterpara",
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="homeScrollBtn">
          <MouseOutlined style={{ color: "rgb(87, 0, 0)" }} />
        </div>
        <hr style={{ color: "transparent", height: "7px" }}></hr>
        <div className="homeContainer">
          <div className="mainTest">
            <h3>TESTIMONIAL</h3>
          </div>
          <Testimonial timelines={timelines} />
        </div>

        <div className="homeSkills ">
          <Typography variant="h3">SKILLS</Typography>

          <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
              <img src={skills?.image1.url} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
              <img src={skills?.image2.url} alt="face2" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
              <img src={skills?.image3.url} alt="face3" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
              <img src={skills?.image4.url} alt="face4" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
              <img src={skills?.image5.url} alt="face5" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
              <img src={skills?.image6.url} alt="face6" />
            </div>
          </div>
          <div className="cubeShadow"></div>

          <div className="homeSkillsBox" id="homeSkillsBox">
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiThreedotjs />
            <SiBootstrap />
          </div>
        </div>

        <div className="homeYoutube">
          <Typography variant="h3"> Design's </Typography>
          <div className="homeYoutubeWrapper">
            {youtubes.map((item) => (
              <YouTubeCard
                image={item.image.url}
                title={item.title}
                url={item.url}
                id={item._id}
                key={item._id}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Homes;
