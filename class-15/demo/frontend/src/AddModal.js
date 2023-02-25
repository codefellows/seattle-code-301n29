import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

class AddModal extends React.Component {

  handleBookSubmit = (e) =>{
    e.preventDefault();
    let book = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    }
    this.props.postBook(book);
  }

  render() {
    return (
      <Modal show={this.props.addModal} onHide={this.props.hideAddModal}>
        <Modal.Header closeButton><Modal.Title>Add Book</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleBookSubmit}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' placeholder='Enter Book Title...' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' placeholder='Enter Book Description...' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='status'>
              <Form.Label>Status</Form.Label>
              <Form.Control type='text' placeholder='Enter Book Status...' />
            </Form.Group>
            <Button onClick={this.props.hideAddModal} type='submit'>Save Book</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default AddModal;