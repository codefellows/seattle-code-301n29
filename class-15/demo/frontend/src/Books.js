import React from "react";
import { Button, Carousel } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

class Books extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookToUpdate: {}
    }
  }


  handleUpdate = (book) =>{
    this.props.showUpdateModal();
    this.setState({bookToUpdate: book})
  }

  handleDelete = (_id) =>{
    this.props.deleteBook(_id);
  }

  render() {


    return (
      <>
        <Carousel>
          {this.props.books.map(book =>
            <Carousel.Item key={book._id}>
              <img className="d-block w-100" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="First slide" />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
                <Button onClick={()=>this.handleUpdate(book)}>Update</Button> <Button variant="danger" onClick={() => this.handleDelete(book._id)}>Delete</Button>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
        <UpdateModal
          putBook={this.props.putBook}
          updateModal={this.props.updateModal}
          hideUpdateModal={this.props.hideUpdateModal}
          bookToUpdate={this.state.bookToUpdate}
        />
      </>
    )
  }
}

export default Books