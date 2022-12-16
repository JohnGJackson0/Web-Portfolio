/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GoStat1 from "../../images/GOSTAT1.png";
import GoStat2 from "../../images/GOSTAT2.png";
import GoStat3 from "../../images/GOSTAT3.png";
import GoStat4 from "../../images/GOSTAT4.png";
import GoStat5 from "../../images/GOSTAT5.png";
import GoStat6 from "../../images/GOSTAT6.png";
import GoStat7 from "../../images/GOSTAT7.png";
import GoStat8 from "../../images/GOSTAT8.png";
import GoStat9 from "../../images/GOSTAT9.png";
import GoStat10 from "../../images/GOSTAT10.png";
import GoStat11 from "../../images/GOSTAT11.png";
import GoStat12 from "../../images/GOSTAT12.png";
import GoStat13 from "../../images/GOSTAT13.png";
import GoStat14 from "../../images/GOSTAT14.png";
import MyNutrition1 from "../../images/MYNUTRITION1.png";
import MyNutrition2 from "../../images/MYNUTRITION2.png";
import MyNutrition3 from "../../images/MYNUTRITION3.png";
import MyNutrition4 from "../../images/MYNUTRITION4.png";
import MyNutrition5 from "../../images/MYNUTRITION5.png";
import GoDo1 from "../../images/GODO1.png";
import GoDo2 from "../../images/GODO2.png";
import GoDo3 from "../../images/GODO3.png";
import GoDo4 from "../../images/GODO4.png";
import GoDo5 from "../../images/GODO5.png";
import GoDo6 from "../../images/GODO6.png";
import Staty1 from "../../images/STATY1.png";
import Staty2 from "../../images/STATY2.png";
import Staty3 from "../../images/STATY3.png";
import Staty4 from "../../images/STATY4.png";
import Staty5 from "../../images/STATY5.png";
import { FaSearchPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { PortfolioImageBox } from "./PortfolioImageBox";

const Portfolio = () => {
  const openpopupboxStaty = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={Staty1}
          alt="Staty - Statistics App"
        />
        <p>
          App created in the Flutter.
          <br />
          Get this app on IOS and Android!
        </p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=me.johnjackson.staty&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            );
          }}
        >
          Android
        </a>
        <br />
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://apps.apple.com/us/app/staty-statistics-calculator/id1658300476"
            );
          }}
        >
          Ios
        </a>
        <p>See the source code:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/JohnGJackson0/staty");
          }}
        >
          Github
        </a>
      </div>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Staty - Statistics App",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

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
          {PortfolioImageBox(
            openpopupboxStaty,
            Staty1,
            "Staty - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxStaty,
            Staty2,
            "Staty - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxStaty,
            Staty3,
            "Staty - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxStaty,
            Staty4,
            "Staty - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxStaty,
            Staty5,
            "Staty - Statistics App"
          )}
          {PortfolioImageBox(openpopupboxGoDo, GoDo1, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo2, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo3, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo4, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo5, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo6, "Godo - TODO App")}
          {PortfolioImageBox(
            openpopupboxMyNutrition,
            MyNutrition1,
            "MyNutrition - Diet App"
          )}
          {PortfolioImageBox(
            openpopupboxMyNutrition,
            MyNutrition2,
            "MyNutrition - Diet App"
          )}
          {PortfolioImageBox(
            openpopupboxMyNutrition,
            MyNutrition3,
            "MyNutrition - Diet App"
          )}
          {PortfolioImageBox(
            openpopupboxMyNutrition,
            MyNutrition4,
            "MyNutrition - Diet App"
          )}
          {PortfolioImageBox(
            openpopupboxMyNutrition,
            MyNutrition5,
            "MyNutrition - Diet App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat1,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat2,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat3,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat4,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat5,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat6,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat7,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat8,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat9,
            "GoStat - Statistics App"
          )}
          {PortfolioImageBox(
            openpopupboxGoStat,
            GoStat10,
            "GoStat - Statistics App"
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
