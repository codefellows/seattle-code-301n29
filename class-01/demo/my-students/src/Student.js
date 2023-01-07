import React from "react";

class Student extends React.Component{
  render(){
    console.log(this.props);
    return(
    <>
      <h2>{this.props.name}</h2>
      <p>Favorite Fruit: {this.props.fruit}</p>
    </>)
  }
}

export default Student