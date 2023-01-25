import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Map from "./Map";
import Restaurants from "./Restaurants";
import Weather from "./Weather";
import axios from "axios";


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInfo: false,
      city: '',
      cityData: {},
      restaurantData: [],
      locationData: [],
      weatherData: []

    }
  }

  handleSearchInput = e =>{
    let cityName = e.target.value;
    this.setState({
      city: cityName
    },
    () => console.log(this.state.city)
    )
    
  }

  displaySearch = async(e) => {
    e.preventDefault();

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`

    let response = await axios.get(url);

    console.log(response.data[0]);

    this.setState({
      displayInfo: true,
      cityData: response.data[0]
    })
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" onInput={this.handleSearchInput}/>
            </Form.Group>
            <Button onClick={this.displaySearch}>Explore!</Button>
          </Form>
        </Container>

        {this.state.displayInfo &&
          <>
            <h2>{this.state.cityData.display_name}</h2>
            <p>Lat:{this.state.cityData.lat}  Lon:{this.state.cityData.lon}</p>
          </>
        }

      </>
    )
  }
}

export default Main;