import React, { useCallback, useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Testimonial.css";
import menFeedback from "../../Images/menFeedback.jpg";
import menFeedback2 from "../../Images/menFeedback2.jpg";
import menFeedback3 from "../../Images/menFeedback3.jpg";
import girlfeedback from "../../Images/girlFeedback.jpg";
import girlfeedback2 from "../../Images/girlfeedback2.jpg";
import girlfeedback3 from "../../Images/girlFeedback3.jpg";

const data = [
  {
    imageUrl: menFeedback,
    background: "rgb(38, 43, 66)",
    name: "Terry",
    quote: "Exceptional service,and delivered outstanding results!",
  },
  {
    imageUrl: girlfeedback,
    background: "rgba(9, 8, 10, 0.7)",
    name: "Jennifer",
    quote: "Dedicated team vision into reality with precision.",
  },
  {
    imageUrl: menFeedback2,
    background: "rgb(42,43, 0.4)",
    name: "Bruce",
    quote: "Impeccable work prompt communication,and a dedicated team.",
  },
  {
    imageUrl: girlfeedback2,
    background: "rgba(1, 28, 0, 0.9)",
    name: "Jessica",
    quote: "Transformed my vision into reality creativity.",
  },
  {
    imageUrl: menFeedback3,
    background: "rgba(1, 28, 0, 0.9)",
    name: "Roy",
    quote: "Making every project a success story!",
  },

  {
    imageUrl: girlfeedback3,
    background: "rgba(19, 28, 0, 0.86)",
    name: "Kayla",
    quote: "Vision into reality with precision, creativity.",
  },
];

const Testimonial = () => {
  const [currentData, setCurrentData] = useState(data[0]);

  const handleNext = useCallback(() => {
    const newIndex = (data.indexOf(currentData) + 1) % data.length;
    setCurrentData(data[newIndex]);
  }, [currentData]);

  const handlePrev = useCallback(() => {
    const newIndex =
      (data.indexOf(currentData) - 1 + data.length) % data.length;
    setCurrentData(data[newIndex]);
  }, [currentData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentData, handleNext]);
  return (
    <>
      <div className="card">
        <div className="icons" onClick={handlePrev}>
          <KeyboardArrowLeftIcon />
        </div>

        <div
          className="timeLineCard"
          style={{ background: currentData.background }}
        >
          <p>"{currentData.quote}"</p>
          <div className="line"></div>

          <div className="imgName">
            <img src={currentData.imageUrl} alt="clientimage" />
            <div className="nameInfo">
              <p>{currentData.name}</p>
              <h5 className="star">⭐⭐⭐⭐⭐</h5>
            </div>
          </div>
        </div>

        <div className="icons" onClick={handleNext}>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
