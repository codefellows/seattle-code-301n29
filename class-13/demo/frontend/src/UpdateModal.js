import React from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";

class UpdateModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedDog = {
      name: e.target.name.value || this.props.dogToUpdate.name,
      color: e.target.color.value || this.props.dogToUpdate.color,
      location: e.target.location.value || this.props.dogToUpdate.location,
      longTail: e.target.longTail.checked,
      _id: this.props.dogToUpdate._id
    }
    console.log(updatedDog);
    this.props.putDog(updatedDog);
  }


  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton><Modal.Title>Update Dog</Modal.Title></Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Dog's Name</Form.Label>
                <Form.Control type="text" placeholder={this.props.dogToUpdate.name} />
              </Form.Group>

              <Form.Group controlId="color">
                <Form.Label>Dog's Color</Form.Label>
                <Form.Control type="text" placeholder={this.props.dogToUpdate.color} />
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label>Dog's Location</Form.Label>
                <Form.Control type="text" placeholder={this.props.dogToUpdate.location} />
              </Form.Group>

              <Form.Group controlId="longTail">
                <Form.Check type="checkbox" label="Has Long Tail?" />
              </Form.Group>
              <Button type="submit" onClick={this.props.handleCloseModal}>Update Dog</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateModal;