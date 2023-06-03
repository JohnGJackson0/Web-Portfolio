/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import REPO1 from "../../images/REPO1.png";
import AUTO1 from "../../images/AUTO1.png";
import AUTO2 from "../../images/AUTO2.png";
import AUTO3 from "../../images/AUTO3.png";
import AUTO4 from "../../images/AUTO4.png";
import AUTO5 from "../../images/AUTO5.png";
import AUTO6 from "../../images/AUTO6.png";
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
import QuickNotes1 from "../../images/QUICKNOTES1.png";
import QuickNotes2 from "../../images/QUICKNOTES2.png";
import QuickNotes3 from "../../images/QUICKNOTES3.png";
import QuickNotes4 from "../../images/QUICKNOTES4.png";
import QuickNotes5 from "../../images/QUICKNOTES5.png";
import { FaAngleDoubleRight } from "react-icons/fa";
// @ts-ignore
import "react-popupbox/dist/react-popupbox.css";
// @ts-ignore
import { PortfolioImageBox } from "./PortfolioImageBox";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
// @ts-ignore
import { StatyModal } from "./StatyModal";
// @ts-ignore
import { GodoModal } from "./GodoModal";
// @ts-ignore
import { MyNutritionModal } from "./MyNutritionModal";
// @ts-ignore
import { GoStatModal } from "./GoStatModal";
import { QuickNotesModal } from "./QuickNotesModal";
import { IMSAutoModal } from "./IMSAutoModal";
import { S3BucketModal } from "./S3BucketModal";
import { RestfulModal } from "./RestfulModal";
import { MernModal } from "./MernModal";

enum PortfolioStatus {
  STATY = "staty",
  GODO = "GoDo",
  GOSTAT = "goStat",
  MYNUTRITION = "myNutrition",
  QUICKNOTES = "quickNotes",
  IMSAUTO = "imsAuto",
  SERVERLESS = "serverless",
  MERN = "mern",
  NONE = "none",
}

enum PlatformNavigation {
  FLUTTER = "flutter",
  REACTNATIVE = "react native",
  ANDROID = "android",
  BACKEND = "backend",
}

const Portfolio = () => {
  const [platformContent, setPlatformContent] = useState(
    PlatformNavigation.FLUTTER
  );
  const [portfolioContent, setPortfolioContent] = useState(
    PortfolioStatus.STATY
  );

  // for modals
  const [showStaty, setShowStaty] = useState(false);
  const [showGoDo, setShowGoDo] = useState(false);
  const [showMyNutrition, setShowMyNutrition] = useState(false);
  const [showGoStat, setShowGoStat] = useState(false);
  const [showQuickNotes, setShowQuickNotes] = useState(false);
  const [showIMSAuto, setShowIMSAuto] = useState(false);
  const [showThumbnailService, setShowThumbnailService] = useState(false);
  const [showRestfulService, setShowRestfulService] = useState(false);
  const [showMern, setShowMern] = useState(false);

  return (
    <div id="portfolio" className="portfolio-wrapper mainBackground">
      {showMern && MernModal(showMern, () => setShowMern(false))}
      {showRestfulService &&
        RestfulModal(showRestfulService, () => setShowRestfulService(false))}
      {showThumbnailService &&
        S3BucketModal(showThumbnailService, () => {
          setShowThumbnailService(false);
        })}
      {showStaty &&
        StatyModal(showStaty, () => {
          setShowStaty(false);
        })}
      {showIMSAuto &&
        IMSAutoModal(showIMSAuto, () => {
          setShowIMSAuto(false);
        })}
      {showGoDo &&
        GodoModal(showGoDo, () => {
          setShowGoDo(false);
        })}
      {showMyNutrition &&
        MyNutritionModal(showMyNutrition, () => {
          setShowMyNutrition(false);
        })}
      {showGoStat &&
        GoStatModal(showGoStat, () => {
          setShowGoStat(false);
        })}
      {showQuickNotes &&
        QuickNotesModal(showQuickNotes, () => {
          setShowQuickNotes(false);
        })}
      <div className="container">
        <Zoom>
          <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        </Zoom>
        <div>
          <Zoom>
            <div className="row">
              <div className="wrap">
                <button
                  className="portfolio-btn"
                  style={{
                    backgroundColor:
                      platformContent === PlatformNavigation.FLUTTER
                        ? "#f9ab00"
                        : "transparent",
                  }}
                  onClick={() => {
                    // only one project, lets select automatically
                    setPortfolioContent(PortfolioStatus.STATY);
                    setPlatformContent(PlatformNavigation.FLUTTER);
                  }}
                >
                  Flutter
                </button>
                <button
                  className="portfolio-btn"
                  style={{
                    backgroundColor:
                      platformContent === PlatformNavigation.REACTNATIVE
                        ? "#f9ab00"
                        : "transparent",
                  }}
                  onClick={() => {
                    setPortfolioContent(PortfolioStatus.NONE);
                    setPlatformContent(PlatformNavigation.REACTNATIVE);
                  }}
                >
                  React Native
                </button>
                <button
                  className="portfolio-btn"
                  style={{
                    backgroundColor:
                      platformContent === PlatformNavigation.ANDROID
                        ? "#f9ab00"
                        : "transparent",
                  }}
                  onClick={() => {
                    setPortfolioContent(PortfolioStatus.NONE);
                    setPlatformContent(PlatformNavigation.ANDROID);
                  }}
                >
                  Android
                </button>
                {
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        platformContent === PlatformNavigation.BACKEND
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.NONE);
                      setPlatformContent(PlatformNavigation.BACKEND);
                    }}
                  >
                    Backend
                  </button>
                }
              </div>
            </div>

            <div className="row">
              <div className="wrap">
                Select a Project
                <FaAngleDoubleRight />
                {platformContent === PlatformNavigation.FLUTTER && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.STATY
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.STATY);
                    }}
                  >
                    Staty
                  </button>
                )}
                {platformContent === PlatformNavigation.REACTNATIVE && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.GODO
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.GODO);
                    }}
                  >
                    GoDo
                  </button>
                )}
                {platformContent === PlatformNavigation.REACTNATIVE && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.QUICKNOTES
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.QUICKNOTES);
                    }}
                  >
                    Quick Notes
                  </button>
                )}
                {platformContent === PlatformNavigation.REACTNATIVE && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.MYNUTRITION
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.MYNUTRITION);
                    }}
                  >
                    My Nutrition
                  </button>
                )}
                {platformContent === PlatformNavigation.ANDROID && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.GOSTAT
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.GOSTAT);
                    }}
                  >
                    GoStat
                  </button>
                )}
                {platformContent === PlatformNavigation.ANDROID && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.IMSAUTO
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.IMSAUTO);
                    }}
                  >
                    Auto Parts CMS
                  </button>
                )}
                {platformContent === PlatformNavigation.BACKEND && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.SERVERLESS
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.SERVERLESS);
                    }}
                  >
                    Microservices
                  </button>
                )}
                {platformContent === PlatformNavigation.BACKEND && (
                  <button
                    className="portfolio-btn"
                    style={{
                      backgroundColor:
                        portfolioContent === PortfolioStatus.MERN
                          ? "#f9ab00"
                          : "transparent",
                    }}
                    onClick={() => {
                      setPortfolioContent(PortfolioStatus.MERN);
                    }}
                  >
                    Mern
                  </button>
                )}
              </div>
            </div>
          </Zoom>
          <div className="wrap">
            {portfolioContent === PortfolioStatus.NONE && (
              <>
                <h1>Select a project above to view</h1>
                <div style={{ margin: 20, height: "50vh" }}></div>
              </>
            )}
          </div>

          {portfolioContent === PortfolioStatus.MERN && (
            <>
              <h3 className="text-uppercase text-center py-5">Mern</h3>
              <div className="image-box-wrapper row row-cols-auto justify-content-center">
                {PortfolioImageBox(
                  () => setShowMern(true),
                  REPO1,
                  "Mern Stack",
                  "Mern Stack"
                )}
              </div>
            </>
          )}
          {portfolioContent === PortfolioStatus.SERVERLESS && (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">Serverless</h3>
              </Zoom>
              <div className="image-box-wrapper row row-cols-auto justify-content-center">
                {PortfolioImageBox(
                  () => setShowThumbnailService(true),
                  REPO1,
                  "Serverless",
                  "S3 Thumbnail Bucket Upload"
                )}
                {PortfolioImageBox(
                  () => setShowRestfulService(true),
                  REPO1,
                  "Serverless",
                  "Restful API in nodeJS"
                )}
              </div>
            </>
          )}
          {portfolioContent === PortfolioStatus.IMSAUTO && (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">
                  IMS Auto Parts
                </h3>
              </Zoom>

              <div className="image-box-wrapper row row-cols-auto justify-content-center">
                {PortfolioImageBox(
                  () => setShowIMSAuto(true),
                  AUTO1,
                  "IMS Auto Store App"
                )}
                {PortfolioImageBox(
                  () => setShowIMSAuto(true),
                  AUTO2,
                  "IMS Auto Store App"
                )}

                {PortfolioImageBox(
                  () => setShowIMSAuto(true),
                  AUTO3,
                  "IMS Auto Store App"
                )}
                {PortfolioImageBox(
                  () => setShowIMSAuto(true),
                  AUTO4,
                  "IMS Auto Store App"
                )}
                {PortfolioImageBox(
                  () => setShowIMSAuto(true),
                  AUTO5,
                  "IMS Auto Store App"
                )}
                {PortfolioImageBox(
                  () => setShowIMSAuto(true),
                  AUTO6,
                  "IMS Auto Store App"
                )}
              </div>
            </>
          )}

          {portfolioContent === PortfolioStatus.QUICKNOTES && (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">Quick notes</h3>
              </Zoom>

              <div className="image-box-wrapper row row-cols-auto justify-content-center">
                {PortfolioImageBox(
                  () => setShowQuickNotes(true),
                  QuickNotes1,
                  "Quick Notes App"
                )}
                {PortfolioImageBox(
                  () => setShowQuickNotes(true),
                  QuickNotes2,
                  "Quick Notes App"
                )}

                {PortfolioImageBox(
                  () => setShowQuickNotes(true),
                  QuickNotes3,
                  "Quick Notes App"
                )}
                {PortfolioImageBox(
                  () => setShowQuickNotes(true),
                  QuickNotes4,
                  "Quick Notes App"
                )}
                {PortfolioImageBox(
                  () => setShowQuickNotes(true),
                  QuickNotes5,
                  "Quick Notes App"
                )}
              </div>
            </>
          )}
          {portfolioContent === PortfolioStatus.STATY && (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">Staty</h3>
              </Zoom>

              <div className="image-box-wrapper row row-cols-auto justify-content-center ">
                {PortfolioImageBox(
                  () => setShowStaty(true),
                  Staty1,
                  "Staty - Statistics App"
                )}
                {PortfolioImageBox(
                  () => setShowStaty(true),
                  Staty2,
                  "Staty - Statistics App"
                )}

                {PortfolioImageBox(
                  () => setShowStaty(true),
                  Staty3,
                  "Staty - Statistics App"
                )}
                {PortfolioImageBox(
                  () => setShowStaty(true),
                  Staty4,
                  "Staty - Statistics App"
                )}
                {PortfolioImageBox(
                  () => setShowStaty(true),
                  Staty5,
                  "Staty - Statistics App"
                )}
              </div>
            </>
          )}

          {portfolioContent === PortfolioStatus.GODO && (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">Godo</h3>
              </Zoom>

              <div className="image-box-wrapper row row-cols-auto justify-content-center ">
                {PortfolioImageBox(
                  () => setShowGoDo(true),
                  GoDo1,
                  "Godo - TODO App"
                )}
                {PortfolioImageBox(
                  () => setShowGoDo(true),
                  GoDo2,
                  "Godo - TODO App"
                )}
                {PortfolioImageBox(
                  () => setShowGoDo(true),
                  GoDo3,
                  "Godo - TODO App"
                )}
                {PortfolioImageBox(
                  () => setShowGoDo(true),
                  GoDo4,
                  "Godo - TODO App"
                )}
                {PortfolioImageBox(
                  () => setShowGoDo(true),
                  GoDo5,
                  "Godo - TODO App"
                )}
                {PortfolioImageBox(
                  () => setShowGoDo(true),
                  GoDo6,
                  "Godo - TODO App"
                )}
              </div>
            </>
          )}

          {portfolioContent === PortfolioStatus.MYNUTRITION && (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">
                  My Nutrition
                </h3>
              </Zoom>

              <div className="image-box-wrapper row row-cols-auto justify-content-center ">
                {PortfolioImageBox(
                  () => setShowMyNutrition(true),
                  MyNutrition1,
                  "MyNutrition - Diet App"
                )}
                {PortfolioImageBox(
                  () => setShowMyNutrition(true),
                  MyNutrition2,
                  "MyNutrition - Diet App"
                )}
                {PortfolioImageBox(
                  () => setShowMyNutrition(true),
                  MyNutrition3,
                  "MyNutrition - Diet App"
                )}
                {PortfolioImageBox(
                  () => setShowMyNutrition(true),
                  MyNutrition4,
                  "MyNutrition - Diet App"
                )}
                {PortfolioImageBox(
                  () => setShowMyNutrition(true),
                  MyNutrition5,
                  "MyNutrition - Diet App"
                )}
              </div>
            </>
          )}
        </div>

        {portfolioContent === PortfolioStatus.GOSTAT && (
          <>
            <Zoom>
              <h3 className="text-uppercase text-center py-5">GoStat</h3>
            </Zoom>
            <div className="image-box-wrapper row row-cols-auto justify-content-center ">
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat1,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat2,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat3,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat4,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat5,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat6,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat7,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat8,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat9,
                "GoStat - Statistics App"
              )}
              {PortfolioImageBox(
                () => setShowGoStat(true),
                GoStat10,
                "GoStat - Statistics App"
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
