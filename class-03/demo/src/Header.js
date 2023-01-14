import React from "react";

class Header extends React.Component{
  render(){
    return(<h1>{this.props.emoji}Students of 301{this.props.emoji}</h1>)
  }
}

export default Header;