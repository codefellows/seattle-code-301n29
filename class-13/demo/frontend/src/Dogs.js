import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

class Dogs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      dogToUpdate: {}
    }
  }

  handleShowModal = (dog) => this.setState({showModal: true, dogToUpdate: dog})
  handleCloseModal = () => this.setState({showModal: false})


  render() {
    return (<>
      <Container>
        <Row className="justify-content-md-center">
          {this.props.dogs.length > 0 && this.props.dogs.map((dog, idx) => (
            <Card key={dog._id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{dog.name}</Card.Title>
                <Card.Text>Color: {dog.color}</Card.Text>
                <Card.Text>Location: {dog.location}</Card.Text>
                <Button variant="success" onClick={() => this.handleShowModal(dog)}>Update</Button>
                <Button variant="danger" onClick={() => this.props.deleteDog(dog._id)}>Delete</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <UpdateModal
        showModal={this.state.showModal}
        dogToUpdate={this.state.dogToUpdate}
        handleCloseModal={this.handleCloseModal}
        putDog={this.props.putDog}
      />
    </>
    )
  }
}

export default Dogs;