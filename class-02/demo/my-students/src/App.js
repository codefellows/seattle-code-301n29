import React from "react";
import Student from "./Student";
import data from "./data.json"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <main>
        {data.map((student,idx) => <Student 
          name={student.name} 
          fruit={student.favoriteFruit}
          imgURL={student.imgURL}
          idx={idx}
        />
        )}
      </main>

    )
  }
}

export default App;