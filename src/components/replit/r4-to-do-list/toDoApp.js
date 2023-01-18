import React from "react";
import { Button, Container, Form, Modal, Nav } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const ToDoApp = () => {
  return (
    <Container className="mt-5">
      <Nav>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              /*             value={formData.firstName}
               */
            />
          </Form.Group>
        </Form>
      </Nav>

      
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Form.Check type="checkbox" label="Check me out" />
            <FaTrash />
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Container>
  );
};

export default ToDoApp;
