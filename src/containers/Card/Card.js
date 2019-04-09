import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Card extends Component {
  generateCard = () => {
    const { currentView, title, story, name, ingredients, instructions, photo, caption, showForm} = this.props
    switch(currentView) {
      case 'stories':
        return(
          <div className='Card--div'>
            <h3>{title}</h3>
            <i className="fas fa-pencil-alt" onClick={() => showForm({title, story})}></i>
            <p className='Card--p--story'>{story}</p>
          </div>
        ) 
      case 'recipes':
        const ingredientArray = ingredients.split('\n');
        return(
          <div className='Card--div'>
            <h3>{name}</h3>
            <i className="fas fa-pencil-alt" onClick={() => showForm({name, ingredients: ingredientArray, instructions})}></i>
            <p>ingredients</p>
            <div>{this.generateIngredients(ingredients)}</div>
            <p>instructions</p>
            <p>{instructions}</p>
          </div>
        )
      case 'images':
        return (
          <div className='Card--div'>
            <img src={photo} alt={caption}/>
            <p>{caption}</p>
            <i className="fas fa-pencil-alt" onClick={() => showForm({caption})}></i>
          </div>
        )
      default: 
        return ''
    }
  }

  generateIngredients = (ingredients) => {
    const splitIngredients = ingredients.split('\n');
    const ingredientsToShow = splitIngredients.map((ingredient, index)=> {
      return <li key={index}>{ingredient}</li>
    })
    return(
      <ul>
        {ingredientsToShow}
      </ul>
    )
  }

  render() {
    return(
      <div>
        {this.generateCard()}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currentView: state.currentView
});

export default connect(mapStateToProps)(Card);