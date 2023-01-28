import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  getFood = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/listType?type=food`
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
      this.setState({
        shoppingList: response.data
      });
    }
    catch(error){
      console.log(error)
    }
  }


  render() {
    return (
      <>
        <button onClick={this.getFood}>Get Food</button>
        <ul>
          {this.state.shoppingList.map((item, idx) =>
            <li key={idx}>
              <p>My Items:</p>
              <p>{item.name}: {item.description}</p>
            </li>
          )}
        </ul>
      </>)
  }
}

export default App
