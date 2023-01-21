import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Map from "./Map";
import Restaurants from "./Restaurants";
import mapImage from "./imgs/map.png";
import restaurantData from "./data/restaurants.json";
import locationData from "./data/location.json";
import Weather from "./Weather";
import weatherData from "./data/weather.json";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInfo: false,
      mapImage: mapImage,
      restaurantData: restaurantData,
      locationData: locationData,
      weatherData: weatherData

    }
  }

  displaySearch = (e) => {
    e.preventDefault();
    this.setState({
      displayInfo: true
    })
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" placeholder="...Not hooked up/ explore button will only show info for Seattle" />
            </Form.Group>
            <Button onClick={this.displaySearch}>Explore!</Button>
          </Form>
        </Container>

        {this.state.displayInfo &&
          <>
            <Weather data={this.state.weatherData}/>
            <Map mapImage={this.state.mapImage} city={this.state.locationData}/>
            <Restaurants data={this.state.restaurantData} city={this.state.locationData}/>
          </>
        }

      </>
    )
  }
}

export default Main;