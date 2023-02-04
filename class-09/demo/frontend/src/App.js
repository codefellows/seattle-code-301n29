import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main/>
        <p>listings courtesy of <a href="https://developers.greenhouse.io/job-board.html#introduction">Greenhouse</a></p>
      </>
    )
  }
}
export default App;