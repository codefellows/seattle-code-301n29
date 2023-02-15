import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

class Dogs extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
        {this.props.dogs.length > 0 && this.props.dogs.map((dog, idx) => (
          <Card key={dog._id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{dog.name}</Card.Title>
              <Card.Text>Color: {dog.color}</Card.Text>
              <Card.Text>Location: {dog.location}</Card.Text>
              <Button variant="danger" onClick={() => this.props.deleteDog(dog._id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
        </Row>
      </Container>
    )
  }
}

export default Dogs;