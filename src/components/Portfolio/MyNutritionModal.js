/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import MyNutrition3 from "../../images/MYNUTRITION3.png";

export const MyNutritionModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">My Nutrition - Diet App</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
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
        <p>GitHub:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/jgjio/my-nutrition");
          }}
        >
          https://github.com/jgjio/my-nutrition
        </a>
      </Modal.Body>
    </Modal>
  );
};
