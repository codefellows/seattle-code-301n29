import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import BestDogs from "./BestDogs";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="secondary">
          <Container>
            <Navbar.Brand>World of Dogs</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/about">About</Nav.Link>
          </Container>
        </Navbar>

        <Routes>

          <Route
            exact path="/"
            element={<BestDogs/>}
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