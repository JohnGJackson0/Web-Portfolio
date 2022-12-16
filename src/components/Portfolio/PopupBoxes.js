/* eslint-disable jsx-a11y/anchor-is-valid */
import GoStat2 from "../../images/GOSTAT2.png";
import MyNutrition3 from "../../images/MYNUTRITION3.png";
import GoDo3 from "../../images/GODO3.png";
import Staty1 from "../../images/STATY1.png";
import { PopupboxManager } from "react-popupbox";

export const openpopupboxStaty = () => {
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

export const openpopupboxGoDo = () => {
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

export const openpopupboxGoStat = () => {
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

export const openpopupboxMyNutrition = () => {
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
