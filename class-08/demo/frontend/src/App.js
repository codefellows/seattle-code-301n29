import React from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photos: []
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = `${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.searchQuery}`
      let response = await axios.get(url);
      console.log(response.data);

      this.setState({
        photos: response.data
      })

    }
    catch (err) {
      console.log(err);
    }

  }


  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Find Photos</Form.Label>
              <Form.Control onChange={this.handleInput} type="text"></Form.Control>
            </Form.Group>
            <Button type="submit">Search</Button>
          </Form>
        </Container>

        {this.state.photos.length > 0 &&
          this.state.photos.map(obj =>
            <>
            <img href={obj.authorLink} src={obj.img_url} alt={obj.author} height={300}/>
            <p>{obj.author}</p>
            </>
          )
        }

      </>
    )
  }
}

export default App;
