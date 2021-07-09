import React from "react";
import GoStat1 from "../images/GOSTAT1.png";
import GoStat2 from "../images/GOSTAT2.png";
import GoStat3 from "../images/GOSTAT3.png";
import GoStat4 from "../images/GOSTAT4.png";
import GoStat5 from "../images/GOSTAT5.png";
import GoStat6 from "../images/GOSTAT6.png";
import GoStat7 from "../images/GOSTAT7.png";
import GoStat8 from "../images/GOSTAT8.png";
import GoStat9 from "../images/GOSTAT9.png";
import GoStat10 from "../images/GOSTAT10.png";
import GoStat11 from "../images/GOSTAT11.png";
import GoStat12 from "../images/GOSTAT12.png";
import GoStat13 from "../images/GOSTAT13.png";
import GoStat14 from "../images/GOSTAT14.png";
import MyNutrition1 from "../images/MYNUTRITION1.png";
import MyNutrition2 from "../images/MYNUTRITION2.png";
import MyNutrition3 from "../images/MYNUTRITION3.png";
import MyNutrition4 from "../images/MYNUTRITION4.png";
import MyNutrition5 from "../images/MYNUTRITION5.png";
import { FaSearchPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Portfolio = () => {
  const openpopupboxGoStat = () => {
    const content = (
      <>
        <img src={GoStat1} alt="goStat Project" />
        <p>
          App created in the native Android SDK.
          <br />
          This is an inference statistics calculator for students learning
          elementary statistics. Just like ti-84 calculator a student can use a
          phone to input data, calculate statistics and compare but this
          calculator comes with the benefit of being more explicit in what is
          going on and bringing insights to the data. Written in Java and
          eventually will be ported to Kotlin.
          <br />
          • Clean Architecture, Clean Coding - Uses Android Room ORM, Live Data
          (observer pattern), Factory Patterns, OOP & Functional paradigms
          Java/Kotlin, DIAP, and soon Clean Architecture.
          <br />• UI Responsive Design - Utilizes Material Design and Responsive
          Mobile design.
        </p>
        <b>GitHub:</b>{" "}
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/jgjio/GoStat");
          }}
        >
          https://github.com/jgjio/GoStat
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigGoStat = {};

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div
          className="image-box-wrapper row row-cols-auto justify-content-center ">
          <div className="portfolio-image-box" onClick={openpopupboxGoStat()}>
            <img
              className="portfolio-image"
              src={MyNutrition1}
              alt="nutrition app"
            />
            <div className="overflow" onClick={openpopupboxGoStat()}></div>
            <IconContext.Provider value={{ size: "30" }}>
              <FaSearchPlus className="portfolio-icon" />
            </IconContext.Provider>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition2}
              alt="nutrition app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition3}
              alt="nutrition app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition4}
              alt="nutrition app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition5}
              alt="nutrition app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat1}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat2}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat3}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat4}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat5}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat6}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat7}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat8}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat9}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat10}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat11}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat12}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat13}
              alt="statistics app"
            />
            <div className="overflow"></div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <div className="overflow"></div>
            <img
              className="portfolio-image"
              src={GoStat14}
              alt="statistics app"
            />
          </div>
          {/* */}
        </div>
        <PopupboxContainer {...popupboxConfigGoStat} />
      </div>
    </div>
  );
};
export default Portfolio;
