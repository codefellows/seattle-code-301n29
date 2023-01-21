
import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {

    console.log(this.props.data);

    return (
      <>
        {this.props.data.data.map((obj, idx) => 
          <Card key={idx} style={{width: "10rem"}}>
            <Card.Header><Card.Title>{obj.valid_date}</Card.Title></Card.Header>
            <Card.Body>
              <Card.Text>
                {obj.weather.description} {obj.temp} &deg;
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </>
    )
  }
}

export default Weather;