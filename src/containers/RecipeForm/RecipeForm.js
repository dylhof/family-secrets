import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiThunk } from '../../thunks/apiThunk';
import uuid from 'uuid/v4';
import { createOptions } from '../../utils/fetch';


export class RecipeForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.item.title || '',
      ingredients: this.props.item.ingredients || [],
      instructions: this.props.item.instructions || '',
      currentFocus: null
    }
  }

  createInputs = () => {
    const ingredients = this.getIngredients()
    ingredients.push(
      <input
        placeholder='Add Ingredients'
        onChange={this.handleIngredientsChange}
        id={uuid()}
        />
    )
    return ingredients
  }

  getIngredients = () => {
    const ingredientInputs = this.state.ingredients.map(ingredient => {
      return (
        <input 
          placeholder='Add Ingredients' 
          value={ingredient.text} 
          id={ingredient.id}
          onChange={this.handleIngredientsChange}/>)
    })
    return ingredientInputs
  }

  handleIngredientsChange = (event) => {
    const ingredientsCopy = [...this.state.ingredients];
    const {value: newText, id} = event.target;
    const foundIngredient = ingredientsCopy.find(ingredient => ingredient.id === id)
    if(foundIngredient) {
      foundIngredient.ingredient = newText
    } else {
      const newIngredient = { id, ingredient: newText }
      ingredientsCopy.push(newIngredient)
    }
    this.setState({ingredients: ingredientsCopy, currentFocus: id})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  makeIngredients = () => {
    let ingredients = ''
    this.state.ingredients.forEach((ingredient, i) => {
      if(i === 0) {
        ingredients = ingredient.ingredient
      } else {
        ingredients = ingredients + '\n' + ingredient.ingredient
      } 
    })
    return ingredients
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { currentFamily, showForm } = this.props
    const ingredients = this.makeIngredients()
    const newRecipe = { title: this.state.title, ingredients, instructions: this.state.instructions, family_id: currentFamily}
    console.log(newRecipe)
    const options = createOptions('POST', newRecipe)
    this.props.apiThunk(`families/${currentFamily}/recipes`, 'addRecipe', options)
    showForm()
  }

  render() {
    return(
      <div className='RecipeForm--div'>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Add Recipe name'
            onChange={this.handleChange}
            value={this.state.title}
            name='title'/>
          {this.createInputs()}
          <input 
            placeholder='Add Instructions'
            onChange={this.handleChange}
            value={this.state.instructions}
            name='instructions'/>
          <button>Submit</button>
        </form>
        <button onClick={this.props.showForm}>Cancel</button>
      </div>
    )
  }
};

export const mapDispatchToProps = dispatch => ({
  apiThunk: (path, action, options) => dispatch(apiThunk(path, action, options))
});

export const mapStateToProps = state => ({
  currentFamily: state.currentFamily
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);