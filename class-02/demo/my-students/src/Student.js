import React from "react";
import Card from 'react-bootstrap/Card'

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


  render() {
    return (
      <div className="student" >
        <Card style={{ width: '18rem' }}>
          <Card.Title as="h2" >{this.props.name}</Card.Title>
          <Card.Text>Favorite Fruit: {this.props.fruit}</Card.Text>
          <Card.Img src={this.props.imgURL}
            alt={this.props.favoriteFruit}
            onClick={this.handleFavorite}
          />
          {this.state.clickedFavorite ? <Card.Text>Favorited: ❤️{this.state.numOfFaves}</Card.Text> : <Card.Text>Favorited: 🖤</Card.Text>}
        </Card>
      </div>
    )
  }
};

export default Student;