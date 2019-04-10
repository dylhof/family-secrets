import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {deletePhoto} from '../../actions';
import { apiThunk } from '../../thunks/apiThunk';
import { createOptions } from '../../utils/fetch';

export class Card extends Component {
  deleteCard = (action, id, type) => {
    const { currentFamily, apiThunk } = this.props
    const options = createOptions('DELETE')
    const path = `families/${currentFamily}/${type}/${id}`
    apiThunk(path, action, options, id)
  }
  deleteImageCard = (id) => {
    deletePhoto(id)
  }
  generateCard = () => {
    const { currentView, title, content, author, name, ingredients, instructions, photo, caption, showForm, id} = this.props
    switch(currentView) {
      case 'stories':
        return(
          <div className='Card--div'>
            <h3>{title}</h3>
            <i className="fas fa-pencil-alt" onClick={() => showForm({title, content})}></i>
            <i className="far fa-trash-alt" onClick={() => this.deleteCard('deleteStory', id, 'stories')}></i>
            <p className='Card--p--story'>{content}</p>
            <p className='Card--p--author'>By: {author}</p>
          </div>
        ) 
      case 'recipes':
        const ingredientArray = ingredients.split('\n');
        return(
          <div className='Card--div'>
            <h3>{name}</h3>
            <i className="fas fa-pencil-alt" onClick={() => showForm({name, ingredients: ingredientArray, instructions})}></i>
            <i className="far fa-trash-alt" onClick={() => this.deleteCard('deleteRecipe', id, 'recipes')}></i>
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
            <i className="far fa-trash-alt" onClick={this.deleteImageCard}></i>
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

export const mapDispatchToProps = dispatch => ({
  apiThunk: (path, action, options, id) => dispatch(apiThunk(path, action, options, id)),
  deletePhoto: (id) => dispatch(deletePhoto(id))
})

export const mapStateToProps = state => ({
  currentView: state.currentView,
  currentFamily: state.currentFamily
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);