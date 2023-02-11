import React from "react";

class Dogs extends React.Component{
  render(){
    return(
      <>
        {this.props.dogs.length > 0 && this.props.dogs.map((dog, idx) => (
          <div key={dog._id}>
            {dog.name} in {dog.location}
          </div>
        ))}
      </>
    )
  }
}

export default Dogs;