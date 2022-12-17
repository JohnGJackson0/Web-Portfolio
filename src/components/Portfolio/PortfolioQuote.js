import Zoom from "react-reveal/Zoom";

export const PortfolioQuote = (message) => {
  return (
    <Zoom>
      <div className="portfolio-image-box">
        <p className="portfolio-image">{message}</p>
      </div>
    </Zoom>
  );
};
