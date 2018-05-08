import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

class EditRecipe extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show: false,
			recipeName: this.props.name,
			recipeIngredients: this.props.ingredients,
			recipeCount: this.props.count
		}
	}
	handleClose = () => {
		this.setState({show: false})
	}
	handleOpen = () => {
		this.setState({show: true})
	}
	editRecipeName = (event) => {
		this.setState({recipeName:event.target.value})
	}
	editRecipeIngredients = (event) => {
		this.setState({recipeIngredients: event.target.value})
	}
	editRecipes = () => {
		const recipe = {
			name: this.state.recipeName,
			ingredients: this.state.recipeIngredients,
			count: this.state.recipeCount
		}
		this.props.edit(recipe);
		this.handleClose();
	}

	deleteRecipe = () => {
		const recipe = {
			name: this.state.recipeName,
			ingredients: this.state.recipeIngredients,
			count: this.state.recipeCount
		}
		this.props.delete(recipe);
	}

	render(){
		return(
			<div>
			<Button bsStyle="success" onClick={this.handleOpen}>EditRecipe</Button>
			<Button bsStyle="danger" onClick={this.deleteRecipe}>Delete Recipe</Button>
			<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <h4 className="center"> Dish Name</h4>
           <form>
				<textarea rows="4" cols="50"
				    style={{height: 100,width:550}} 
				    className="Dish Name"
				    onChange={this.editRecipeName}>
				    {this.props.name}	
				</textarea>
			</form>

            <hr />
            <h4 className="center"> Ingredients</h4>
           <form>
				<textarea rows="4" cols="50"
				    style={{height: 100,width:550}} 
				    className="Dish Name"
				    onChange={this.editRecipeIngredients}>
				    {this.props.ingredients}	
				</textarea>
			</form>
           
          </Modal.Body>
          <Modal.Footer>
 			<Button onClick={this.editRecipes}>Edit Recipe!</Button>
		    <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
			)
	}
}
export default EditRecipe;