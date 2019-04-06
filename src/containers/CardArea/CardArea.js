import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as mockData from '../../mockData';
import Card from '../Card/Card';

export class CardArea extends Component{
  //Here we will need to add a fetch call for the user's family stories/recipes/photos
  generateCards = () => {
    const { currentFamily, currentView } = this.props
    const familyStories = mockData.stories.filter(story => {
      return story.family_id === currentFamily
    });
    const familyRecipes = mockData.recipes.filter(recipe => {
      return recipe.family_id === currentFamily
    })
    const familyPhotos = mockData.photos.filter(photo => {
      return photo.family_id === currentFamily
    })

    switch(currentView) {
      case 'Stories':
        const storyCards = familyStories.map(story => {
          return(
            <Card {...story}/>
          )
        })
        return storyCards;
      case 'Recipes':
        const recipeCards = familyRecipes.map(recipe => {
          return(
            <Card {...recipe}/>
          )
        })
        return recipeCards;
      case 'Photos':
        const photoCards = familyPhotos.map(photo => {
          return(
            <Card {...photo}/>
          )
        })
        return photoCards
      default: 
        return ''
    }
  }

  render() {
    const { currentView, currentUser, currentFamily} = this.props;
    return (
      <div className='CardArea'>
        {!currentUser && <h2>Login to see your family Secrets!</h2>}
        {(currentUser && !currentFamily && !currentView) && <h2>Select a family and category to start browsing your family secrets!</h2>}
        {(currentUser && !currentFamily && currentView) && <h2>Select a family name to see your {currentView}</h2>}
        {(currentUser && currentFamily && !currentView) && <h2>Select Stories, Recipes or Photos!</h2>}
        {(currentUser && currentView && currentFamily) && <h2>My Family {currentView}:</h2>}
        <div className='CardArea--div'>
          {this.generateCards()}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currentView: state.currentView,
  currentFamily: state.currentFamily,
  currentUser: state.currentUser
})
export default connect(mapStateToProps)(CardArea);

CardArea.propTypes = {
  currentView: PropTypes.string
}