import React from "react";
import Student from "./Student";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
  render(){
    return(
    <>
      <main>
        <Container>
          <Row xs={2} s={2} md={3}>
            {this.props.data.map((student,idx) => <Student 
          name={student.name} 
          fruit={student.favoriteFruit}
          imgURL={student.imgURL}
          key={idx}
          addHorns={this.props.addHorns}
          handleShowModal={this.props.handleShowModal}
        />
        )}
          </Row>
        </Container>
        
      </main>
    </>);
  }
}

export default Main