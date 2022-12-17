/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import GoDo3 from "../../images/GODO3.png";

export const GodoModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Godo - Task Manager</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
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
        <p>Android/Google Play:</p>
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
      </Modal.Body>
    </Modal>
  );
};
