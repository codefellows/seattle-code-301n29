import React from "react";
import data from "./data.json"
import "./App.css"
import Main from "./Main";
import Header from "./Header"
import Footer from "./Footer"
import Modal from "react-bootstrap/Modal"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: "",
      showModal: false,
      studentName: "",
      studentFruitImg: ""
    }
  }

  addHorns = () => {
    console.log(this);
    this.setState({
      emoji: "🤘"
    })
  }

  // Function declaration and expression does not provide correct contextual this... Will not work 
  // addHorns(){
  //   console.log(this);
  //   this.setState({
  //         emoji: "🤘"
  //       })
  // }
  // addHorns = function(){
  //   console.log(this);
  //   this.setState({
  //         emoji: "🤘"
  //       })
  // }

  handleShowModal = (name, fruitImg) => {
    this.setState({
      showModal: true,
      studentName: name,
      studentFruitImg: fruitImg
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }


  render() {
    return (
      <>
        <Header emoji={this.state.emoji} />
        <Main
          data={data}
          addHorns={this.addHorns}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}>
            {/* <SelectedBest/> */}
          <Modal.Header closeButton>
            <Modal.Title>{this.state.studentName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.studentFruitImg} alt={"Fruit"} height={300}/>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default App;