import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import "./AddButton.css";
class AddButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			toggleClickAdd: false,
			recipeName: '',
			ingredients: '',
			count: ''
		}
	}

	openModal = () => {
		this.setState({toggleClickAdd: true})
	}
	closeModal = () => {
		this.setState({toggleClickAdd: false})
	}
	setRecipeName = (event) =>{
		this.setState({recipeName:event.target.value});
	}
	setRecipeIngredients = (event) => {
		this.setState({ingredients: event.target.value});
	}
	setRecipeInstruction = (event) => {
		this.setState({instruction: event.target.value});
	}

	addRecipe = () => {
		const recipe = {
			name: this.state.recipeName,
			ingredients: this.state.ingredients,
			count: (this.props.recipeList.length)-1
		}
		this.props.addRecipe(recipe);
		this.closeModal();
	}

	render(){
		return(
			<div>
				<ButtonToolbar className="addButton">
					<Button className="addButton" bsStyle="success" onClick={this.openModal}>Add New Recipe</Button>
				</ButtonToolbar>
				<Modal show={this.state.toggleClickAdd} onHide={this.closeModal}>
		          <Modal.Header closeButton>
		            <Modal.Title>Enter New Recipe Here!</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          	<h4 className="center"> Dish Name</h4>
		            <form>
				      <textarea rows="4" cols="50"
				      style={{height: 100,width:550}} 
				      className="Dish Name"
				      onChange={this.setRecipeName}>
						
					  </textarea>
				    </form>
				    <hr></hr>
				    <h4 className="center">Ingredients</h4>
				    <form>
				      <textarea rows="4" cols="50" 
				      style={{height: 100,width:550}}
				      className="Ingredients"
				      placeholder="Separated by commas"
				      onChange={this.setRecipeIngredients}>
						
					  </textarea>
				    </form>

		          </Modal.Body>
		          <Modal.Footer>
		          	<Button onClick={this.addRecipe}>Add New Recipe!</Button>
		            <Button onClick={this.closeModal}>Close</Button>
		          </Modal.Footer>
		        </Modal>
			</div>
			)
	}
}
export default AddButton;