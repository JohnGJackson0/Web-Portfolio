import { IconContext } from "react-icons";
import { FaSearchPlus } from "react-icons/fa";

export const PortfolioImageBox = (onClickCallback, imageSrc, alt) => {
  return (
    <div className="portfolio-image-box">
      <img className="portfolio-image" src={imageSrc} alt={alt} />
      <div
        className="overflow"
        onClick={() => {
          onClickCallback();
        }}
      >
        <IconContext.Provider value={{ size: "30" }}>
          <FaSearchPlus className="portfolio-icon" />
        </IconContext.Provider>
      </div>
    </div>
  );
};
