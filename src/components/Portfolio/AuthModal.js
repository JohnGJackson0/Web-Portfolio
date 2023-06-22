/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import AUTH1 from "../../images/AUTH1.png";

export const AUTHModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Clean Architecture AWS Auth Template</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <img
          className="portfolio-image-popupbox"
          src={AUTH1}
          alt="Clean Architecture Login Template"
        />
        <p>
          This app is built using React Native with a backend powered by AWS
          SAM.
          <br />
          It showcases several noteworthy aspects, including microservices
          architecture, comprehensive unit test coverage, clean code structure,
          and an infrastructure-as-code solution for microservices using AWS
          SAM, seamlessly integrated with React Native.
        </p>
        <p>Github:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://github.com/JohnGJackson0/react_native_clean_architecture_login_template"
            );
          }}
        >
          See on GITHUB
        </a>
      </Modal.Body>
    </Modal>
  );
};
