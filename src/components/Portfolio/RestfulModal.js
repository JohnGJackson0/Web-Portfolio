/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";

export const RestfulModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Serverless - Restful API</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <p>A restful API in nodejs on serverless framework.</p>
        <p>github:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://github.com/JohnGJackson0/RESTFul-Serverless-Microservice-Example"
            );
          }}
        >
          https://github.com/JohnGJackson0/RESTFul-Serverless-Microservice-Example
        </a>
      </Modal.Body>
    </Modal>
  );
};
