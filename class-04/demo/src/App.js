import React from "react";
import data from "./data.json"
import "./App.css"
import Main from "./Main";
import Header from "./Header"
import Footer from "./Footer"
import Modal from "react-bootstrap/Modal"
import { Form } from "react-bootstrap";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: "",
      showModal: false,
      studentName: "",
      studentFruitImg: "",
      studentData: data
    }
  }

  addHorns = () => {
    console.log(this);
    this.setState({
      emoji: "🤘"
    })
  }

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

  updateStudentData = (e) =>{
    e.preventDefault();
    const team = e.target.value;
    let updatedData;

    if(team === ""){
      updatedData = data;
    }
    else{
      updatedData = data.filter(student => student.team === team)
    }

    this.setState({
      studentData: updatedData
    })

  }

  render() {
    return (
      <>
        <Header emoji={this.state.emoji} />

        <Form>
          <Form.Group>
            <Form.Select onChange={this.updateStudentData}>
              <option value={""}>All Students</option>
              <option value={"Red"}>Red Team</option>
              <option value={"Blue"}>Blue Team</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main
          data={this.state.studentData}
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