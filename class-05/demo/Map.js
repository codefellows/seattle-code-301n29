import React from "react";
import { Container } from "react-bootstrap";

class Map extends React.Component{
  render(){
    return(
      <Container className="text-center">
        <img src={this.props.mapImage} alt={this.props.city} height={500}/>  

      </Container>
    )
  }
}

export default Map;