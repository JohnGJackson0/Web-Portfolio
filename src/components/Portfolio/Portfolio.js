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
import { PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { PortfolioImageBox } from "./PortfolioImageBox";
import {
  openpopupboxStaty,
  openpopupboxGoDo,
  openpopupboxGoStat,
  openpopupboxMyNutrition,
} from "./PopupBoxes";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <PopupboxContainer />
        <h3 className="text-uppercase text-center py-5">Staty</h3>
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
          <div className="portfolio-image-box">
            <p className="portfolio-image">
              The world is manipulated by bad statistics and studies. We want to
              arm society by making a statistics learning platform that can be
              digested by regular everyday people. By remaking goStat in a
              multiplatform enviornment such as Flutter it finally has the
              accessability needed for that goal. No need for $100 calculators
              and convoluted solutions meant for professionals only. -- John
              Jackson
            </p>
          </div>

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
        </div>
        <h3 className="text-uppercase text-center py-5">Godo</h3>
        <div className="image-box-wrapper row row-cols-auto justify-content-center ">
          {PortfolioImageBox(openpopupboxGoDo, GoDo1, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo2, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo3, "Godo - TODO App")}
          <div className="portfolio-image-box">
            <p className="portfolio-image">
              "oh "yuck" another task manager in a portfolio..". Nope, It is a
              social network for coordinating tasks in a family unit, company or
              other groups complete with login and task synchronization with
              multiple accounts. Give me some credit.. micro-architecture, utc,
              react native multi platform, and more. This has become an example
              of clean architecture and how it can make UTC amazingly eazy. --
              John Jackson
            </p>
          </div>
          {PortfolioImageBox(openpopupboxGoDo, GoDo4, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo5, "Godo - TODO App")}
          {PortfolioImageBox(openpopupboxGoDo, GoDo6, "Godo - TODO App")}
        </div>
        <h3 className="text-uppercase text-center py-5">MyNutrition</h3>
        <div className="image-box-wrapper row row-cols-auto justify-content-center ">
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
        </div>
        <h3 className="text-uppercase text-center py-5">GoStat</h3>
        <div className="image-box-wrapper row row-cols-auto justify-content-center ">
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
