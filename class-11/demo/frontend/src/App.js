import React from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dogs from "./Dogs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    }
  }

  componentDidMount() {
    this.fetchDogs();
  }

  async fetchDogs() {
    let url = `${process.env.REACT_APP_SERVER}/dogs`;
    try {
      const response = await axios.get(url);
      this.setState({ dogs: response.data }, () => console.log(this.state.dogs));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Router>
        <nav>
          <h1>World of Dogs</h1>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
        </nav>

        <Routes>

          <Route 
            exact path="/"
            element={<Dogs dogs={this.state.dogs} />}
          >
          </Route>

          <Route 
            path="/about"
            element={<div>Hook me up!</div>}  
          >
          </Route>

        </Routes >
        
      </Router >
    )
  }
}

export default App;