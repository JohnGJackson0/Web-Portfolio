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
import GoDo1 from "../images/GODO1.png";
import GoDo2 from "../images/GODO2.png";
import GoDo3 from "../images/GODO3.png";
import GoDo4 from "../images/GODO4.png";
import GoDo5 from "../images/GODO5.png";
import GoDo6 from "../images/GODO6.png";
import { FaSearchPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openpopupboxGoDo = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={GoDo3}
          alt="GoDo - Task Manager"
        />
        <p>
          App created in the React Native framework.
          <br />
          Launched on Google Play store and soon IOS.
        </p>
        <b>Android/Google Play:</b>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=com.tanagr.godo"
            );
          }}
        >
          https://play.google.com/store/apps/details?id=com.tanagr.godo
        </a>
      </div>
    );

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "GoDo - Task Manager",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const openpopupboxGoStat = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={GoStat2} alt="goStat" />
        <p>
          App created in the native Android SDK.
          <br />
          This is an inference statistics calculator for students learning
          elementary statistics.
        </p>
        <b>GitHub:</b>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/jgjio/GoStat");
          }}
        >
          https://github.com/jgjio/GoStat
        </a>
      </div>
    );

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Go Stats",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const openpopupboxMyNutrition = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={MyNutrition3}
          alt="My Nutrition"
        />
        <p>
          App created in the React Native framework.
          <br />
          This is a calorie counter for people trying to gain, maintain or lose
          weight.
        </p>
        <b>GitHub:</b>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/jgjio/my-nutrition");
          }}
        >
          https://github.com/jgjio/my-nutrition
        </a>
      </div>
    );

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "My Nutrition",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <PopupboxContainer />
        <div className="image-box-wrapper row row-cols-auto justify-content-center ">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={GoDo1} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoDo();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={GoDo2} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoDo();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={GoDo3} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoDo();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={GoDo4} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoDo();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={GoDo5} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoDo();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={GoDo6} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoDo();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={MyNutrition1} />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxMyNutrition();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition2}
              alt="nutrition app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxMyNutrition();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition3}
              alt="nutrition app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxMyNutrition();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition4}
              alt="nutrition app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxMyNutrition();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={MyNutrition5}
              alt="nutrition app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxMyNutrition();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat1}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat2}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat3}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat4}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat5}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat6}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat7}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat8}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat9}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat10}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat11}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat12}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat13}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={GoStat14}
              alt="statistics app"
            />
            <div
              className="overflow"
              onClick={() => {
                openpopupboxGoStat();
              }}
            >
              <IconContext.Provider value={{ size: "30" }}>
                <FaSearchPlus className="portfolio-icon" />
              </IconContext.Provider>
            </div>
          </div>
          {/* */}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
