import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as mockData from '../../mockData';

export class Card extends Component {
  generateCard = () => {
    const { currentView, title, story, name, ingredients, instructions, photo, caption} = this.props
    switch(currentView) {
      case 'Stories':
        return(
          <div className='Card--div'>
            <h3>{title}</h3>
            <p className='Card--p--story'>{story}</p>
          </div>
        ) 
      case 'Recipes':
        return(
          <div className='Card--div'>
            <h3>{name}</h3>
            <p>ingredients</p>
            <div>{this.generateIngredients(ingredients)}</div>
            <p>instructions</p>
            <p>{instructions}</p>
          </div>
        )
      case 'Photos':
        return (
          <div className='Card--div'>
            <img src={photo} alt={caption}/>
            <p>{caption}</p>
          </div>
        )
      default: 
        return ''
    }
  }

  generateIngredients = (ingredients) => {
    const splitIngredients = ingredients.split('\n');
    const ingredientsToShow = splitIngredients.map(ingredient => {
      return <li>{ingredient}</li>
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