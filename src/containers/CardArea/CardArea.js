import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as mockData from '../../mockData';
import Card from '../Card/Card';
import StoryForm from '../StoryForm/StoryForm';
import RecipeForm from '../RecipeForm/RecipeForm';
import ImageForm from '../ImageForm/ImageForm';

export class CardArea extends Component{
  state = {
    showForm: false
  }
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
      case 'stories':
        const storyCards = familyStories.map(story => {
          return(
            <Card {...story}/>
          )
        })
        return storyCards;
      case 'recipes':
        const recipeCards = familyRecipes.map(recipe => {
          return(
            <Card {...recipe}/>
          )
        })
        return recipeCards;
      case 'images':
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

  showForm = () => {
    this.setState({showForm: true})
  }

  findForm = () => {
    switch(this.props.currentView) {
      case 'stories':
        return <StoryForm showForm={this.showForm}/>
      case 'recipes':
        return <RecipeForm showForm={this.showForm}/>
      case 'images':
        return <ImageForm showForm={this.showForm}/>
      default:
        return <div></div>
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
        {
          (currentUser && currentView && currentFamily) && 
          <div>
            <h2>My Family {currentView}:</h2>
            <i className="fas fa-plus" onClick={this.showForm}></i> 
          </div>  
        }
        {
          !this.state.showForm ? 
          <div className='CardArea--div'>
            {this.generateCards()}
          </div> :
          <div>
            {this.findForm()}
          </div>
        }
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