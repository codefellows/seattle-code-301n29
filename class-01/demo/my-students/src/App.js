import React from "react";
import Student from "./Student";

class App extends React.Component{
  render(){
    return(
      <>
       <Student name={"Anthony"} fruit={"Pineapple"}/>
       <Student name={"Danner"} fruit={"Apple"}/> 
       <Student name={"Nick"} fruit={"Orange"}/> 
      </>
        
    )
  }
}

export default App;