import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import "./Student.css"

class Student extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedFavorite: false,
      numOfFaves: 0
    };

  }

  handleFavorite = () => {
    this.setState({
      clickedFavorite: true,
      numOfFaves: this.state.numOfFaves + 1
    })
  };

  fillAndShowModal = () =>{
    this.props.handleShowModal(this.props.name, this.props.imgURL);
  }


  render() {
    return (
      <Col>
        <Card onClick={this.props.addHorns}>
          <Card.Title as="h2" >{this.props.name}</Card.Title>
          <Card.Text onClick={this.fillAndShowModal}>Favorite Fruit: {this.props.fruit}</Card.Text>
          <Card.Img src={this.props.imgURL}
            alt={this.props.favoriteFruit}
            onClick={this.handleFavorite}
          />
          {this.state.clickedFavorite ? <Card.Text>Favorited: ❤️{this.state.numOfFaves}</Card.Text> : <Card.Text>Favorited: 🖤</Card.Text>}
        </Card>
      </Col>
    )
  }
};

export default Student;