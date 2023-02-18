import React from "react";
import axios from 'axios';
import Dogs from "./Dogs"
import AddForm from "./AddForm";

class BestDogs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    }
  }

  componentDidMount() {
    this.fetchDogs();
  }

  async fetchDogs() {
    let url = `${process.env.REACT_APP_SERVER}/dogs`;
    try {
      const response = await axios.get(url);
      this.setState({ dogs: response.data }, () => console.log(this.state.dogs));
    } catch (error) {
      console.log(error);
    }
  }

  postDog = async (newDog) =>{
    try{
      let url = `${process.env.REACT_APP_SERVER}/dogs`;
      const response = await axios.post(url, newDog)
      console.log(response.data);
      //Using elipses/spread to copy over old data and add new dog into new array
      this.setState({dogs: [...this.state.dogs, response.data]})
    }
    catch(err){console.error(err)}
  }

  deleteDog = async(_id) => {
    try{
      let url = `${process.env.REACT_APP_SERVER}/dogs/${_id}`;
      await axios.delete(url);
      let updatedDogs = this.state.dogs.filter(dog => dog._id !== _id);
      this.setState({dogs: updatedDogs});
    }
    catch(err){console.error(err)}
  }

  putDog = async(updatedDog) => {
    try{
      let url = `${process.env.REACT_APP_SERVER}/dogs/${updatedDog._id}`;
      await axios.put(url,updatedDog);
      const updatedDogArr = this.state.dogs.map(oldDog => updatedDog._id === oldDog._id ? updatedDog : oldDog);
      this.setState({dogs: updatedDogArr});
    }
    catch(err){console.error(err);}
  }

  render(){
    return(
      <>
        <AddForm postDog={this.postDog}/>
        <Dogs 
        dogs={this.state.dogs}
        deleteDog={this.deleteDog}
        putDog={this.putDog}
        />
      </>
    )
  }
}

export default BestDogs;