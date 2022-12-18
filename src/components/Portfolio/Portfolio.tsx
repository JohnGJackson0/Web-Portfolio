/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AUTO1 from "../../images/AUTO1.png"
import AUTO2 from "../../images/AUTO2.png"
import AUTO3 from "../../images/AUTO3.png"
import AUTO4 from "../../images/AUTO4.png"
import AUTO5 from "../../images/AUTO5.png"
import AUTO6 from "../../images/AUTO6.png"
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
import QuickNotes2 from "../../images/QUICKNOTES1.png";
import QuickNotes3 from "../../images/QUICKNOTES1.png";
import QuickNotes4 from "../../images/QUICKNOTES1.png";
import QuickNotes5 from "../../images/QUICKNOTES1.png";
// @ts-ignore
import "react-popupbox/dist/react-popupbox.css";
// @ts-ignore
import { PortfolioImageBox } from "./PortfolioImageBox";
// @ts-ignore
import { PortfolioQuote } from "./PortfolioQuote";
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

enum PortfolioStatus {
  STATY = "staty",
  GODO = "GoDo",
  GOSTAT = "goStat",
  MYNUTRITION = "myNutrition",
  QUICKNOTES= "quickNotes",
  IMSAUTO="imsAuto"
}

const Portfolio = () => {
  const [showStaty, setShowStaty] = useState(false);
  const [showGoDo, setShowGoDo] = useState(false);
  const [showMyNutrition, setShowMyNutrition] = useState(false);
  const [showGoStat, setShowGoStat] = useState(false);
  const [showQuickNotes, setShowQuickNotes] = useState(false);
  const [showIMSAuto, setShowIMSAuto] = useState(false);

  const [portfolioContent, setPortfolioContent] = useState(PortfolioStatus.STATY);

  return (
    <div id="portfolio" className="portfolio-wrapper mainBackground">
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
        })
      }
      <div className="container">
        <Zoom>
          <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        </Zoom>
        <div>
        <Zoom>
          <div className="row">
            <div className="wrap">
              <p>Flutter:&nbsp;</p>
              <button className="portfolio-btn" onClick={()=>{
                setPortfolioContent(PortfolioStatus.STATY)
              }}>Staty</button>
              <p>&nbsp;React Native:&nbsp;</p>
              <button className="portfolio-btn" onClick={()=>{
                setPortfolioContent(PortfolioStatus.GODO)
              }}>GoDo</button>
              <button className="portfolio-btn" onClick={()=>{
                setPortfolioContent(PortfolioStatus.QUICKNOTES)
              }}>Quick Notes</button>
              <button className="portfolio-btn" onClick={()=>{
                setPortfolioContent(PortfolioStatus.MYNUTRITION)
              }}>My Nutrition</button>
              <p>&nbsp;Android:&nbsp;</p>
              <button className="portfolio-btn" onClick={()=>{
                setPortfolioContent(PortfolioStatus.GOSTAT)
              }}>GoStat</button>
              <button className="portfolio-btn" onClick={()=>{
                setPortfolioContent(PortfolioStatus.IMSAUTO)
              }}>Auto Parts CMS</button>
            </div>
          </div>
        </Zoom>
        {portfolioContent === PortfolioStatus.IMSAUTO && 
          (
            <>
              <Zoom>
                <h3 className="text-uppercase text-center py-5">IMS Auto Parts</h3>
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

                {PortfolioQuote(
                  "I learned that evolutionary prototypes are too much work for many scenerios. However they come in handy when developers find themselves unable to predict impediements like with library integrations. Always recommend at least a quick wireframe at the start of a development cycle. -- John Jackson"
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


          {portfolioContent === PortfolioStatus.QUICKNOTES && 
          (
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
          {portfolioContent === PortfolioStatus.STATY && 
          (
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
              {PortfolioQuote(
                "The world is manipulated by bad statistics and studies. We want to arm society by making a statistics learning platform that can be digested by regular everyday people. By remaking goStat in a multiplatform enviornment such as Flutter it finally has the accessability needed for that goal. No need for $100 calculators and convoluted solutions meant for professionals only. -- John Jackson"
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

          {portfolioContent === PortfolioStatus.GODO && (<>
            <Zoom>
              <h3 className="text-uppercase text-center py-5">Godo</h3>
            </Zoom>

            <div className="image-box-wrapper row row-cols-auto justify-content-center ">
              {PortfolioImageBox(() => setShowGoDo(true), GoDo1, "Godo - TODO App")}
              {PortfolioImageBox(() => setShowGoDo(true), GoDo2, "Godo - TODO App")}
              {PortfolioImageBox(() => setShowGoDo(true), GoDo3, "Godo - TODO App")}

              {PortfolioQuote(
                '"oh "yuck" another task manager in a portfolio..". Nope, It is a social network for coordinating tasks in a family unit, company or other groups complete with login and task synchronization with multiple accounts. Give me some credit.. micro-architecture, utc, react native multi platform, and more. This has become an example of clean architecture and how it can make UTC amazingly eazy. -- John Jackson'
              )}
              {PortfolioImageBox(() => setShowGoDo(true), GoDo4, "Godo - TODO App")}
              {PortfolioImageBox(() => setShowGoDo(true), GoDo5, "Godo - TODO App")}
              {PortfolioImageBox(() => setShowGoDo(true), GoDo6, "Godo - TODO App")}
            </div>
          </>)}

          {portfolioContent === PortfolioStatus.MYNUTRITION && (<>
            <Zoom>
              <h3 className="text-uppercase text-center py-5">My Nutrition</h3>
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
          </>)}
        </div>

        {portfolioContent === PortfolioStatus.GOSTAT && (<>
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
          {PortfolioQuote(
              "I guess I just love statistics. However, I also love quality. I built this app so quickly it became extremely hard to maintain and update it to Kotlin. At the time I also felt the need for it to be multi-platform, so I remade it in Flutter instead!  -- John Jackson"
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
        </>)}
        </div>
      </div>
  )}

export default Portfolio;
