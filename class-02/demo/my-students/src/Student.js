import React from "react";
import Card from 'react-bootstrap/Card'

class Student extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedFavorite: false
    };
  }

  handleFavorite = () => {
    this.setState({
      clickedFavorite: this.state.clickedFavorite ? false : true
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
          {this.state.clickedFavorite ? <Card.Text>Favorited: ❤️</Card.Text> : <Card.Text>Favorited: 🖤</Card.Text>}
        </Card>
      </div>
    )
  }
};

export default Student;