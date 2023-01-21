import React from "react";

class Restaurants extends React.Component{
  render(){
    return(
      <ul>
        {this.props.data.map((obj, idx) => 
          <li key={idx}>
            <h2>{obj.restaurant}</h2>
            <p>Servers {obj.cuisines} at {obj.locality}</p>
          </li>
        )}
      </ul>
    )
  }
}

export default Restaurants;