import axios from 'axios';
import React from 'react';
import Recipe from './Recipe';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient:'',
      recipes: []
    }
  }

  getRecipes = async (e) => {
    e.preventDefault();
    const server='http://localhost:3001';
    const url = `${server}/recipes?ingredient=${this.state.ingredient}`
    let recipes = await axios.get(url);
    this.setState({recipes: recipes.data});
  }

  render() {
    return(
      <>
        <form onSubmit={this.getRecipes}>
          <label>enter an ingredient</label>
          <input onChange={(e) => this.setState({ ingredient:e.target.value })} type="text" name="ingredient"></input>
          <button type="submit">submit</button>
        </form>

        {this.state.recipes.length > 0 && this.state.recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            recipe={recipe}
          />
          ))
        }
      </>
    )
  }
}

export default App;
