import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddButton from "./components/AddButton/AddButton";
import DisplayArea from "./components/DisplayArea/DisplayArea";
import EditRecipe from "./components/EditRecipe/EditRecipe";
import { Panel, Well, Button } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipe: [],
      openModal: false
    }
  }

  addNewRecipe = (newRecipe) => {
    this.setState({
      recipe: [...this.state.recipe,newRecipe]
    });
  }

  editRecipe = (recipe) => {
    let selectedRecipe = this.state.recipe.find(obj => obj.count=== recipe.count)
    let editedRecipe = Object.assign(selectedRecipe,recipe);
    this.setState(Object.assign(this.state.recipe,editedRecipe))
  }

  deleteRecipe = (recipe) => {
    let arr = this.state.recipe.filter(obj => obj.count !== recipe.count);
    this.setState({recipe: arr});
  }

  displayRecipe = () => {
    let recipes = this.state.recipe.map(recipe => {
      let ingredientsList = recipe.ingredients.split(",");
      return (
        <Panel id="collapsible-panel-example-2" defaultClosedbsStyle="info">
          <Panel.Heading>
            <Panel.Title toggle>
              {recipe.name}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ul>{ingredientsList.map(ing => {return(<li>{ing}</li>)})}</ul>
              <EditRecipe edit={this.editRecipe.bind(this)} 
              delete = {this.deleteRecipe.bind(this)}
              name={recipe.name} 
              ingredients={recipe.ingredients} 
              count={recipe.count}/>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        )
    });
    return recipes;
  }

  render() {
    return (
      <div className="App background">
        <h1 className="text-center"> RECIPE BOX </h1>
        <Well className="well" bsSize="large">
            {this.displayRecipe()}
        </Well>
        <AddButton addRecipe ={this.addNewRecipe} 
         recipeList = {this.state.recipe}/>
      </div>
    );
  }
}

export default App;
