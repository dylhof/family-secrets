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
    showForm: false,
    item: {}
  }
  
  generateCards = () => {
    const { currentFamily, currentView, stories, photos, recipes } = this.props
    
    switch(currentView) {
      case 'stories':
        const familyStories = stories.filter(story => {
          return parseInt(story.family_id) === currentFamily
        });
        const storyCards = familyStories.map(story => {
          return(
            <Card {...story} showForm={this.showForm}/>
          )
        })
        return storyCards;
      case 'recipes':
        const familyRecipes = recipes.filter(recipe => {
          return parseInt(recipe.family_id) === currentFamily
        })
        const recipeCards = familyRecipes.map(recipe => {
          return(
            <Card {...recipe} showForm={this.showForm}/>
          )
        })
        return recipeCards;
      case 'images':
        const familyPhotos = mockData.photos.filter(photo => {
          return parseInt(photo.family_id) === currentFamily
        })
        const photoCards = familyPhotos.map(photo => {
          return(
            <Card {...photo} showForm={this.showForm}/>
          )
        })
        return photoCards
      default: 
        return ''
    }
  }

  showForm = (item) => {
    this.setState({showForm: !this.state.showForm, item})
  }

  findForm = () => {
    const {item} = this.state
    switch(this.props.currentView) {
      case 'stories':
        return <StoryForm showForm={this.showForm} item={item}/>
      case 'recipes':
        return <RecipeForm showForm={this.showForm} item={item}/>
      case 'images':
        return <ImageForm showForm={this.showForm} item={item}/>
      default:
        return <div></div>
    }
  }

  render() {
    const { currentView, currentUser, currentFamily} = this.props;
    const { showForm } = this.state;
    return (
      <div className='CardArea'>
        {!currentUser && <h2>Login to see your family Secrets!</h2>}
        {(currentUser && !currentFamily && !currentView) && 
        <h2>Select a family and category to start browsing your family secrets!</h2>}
        {(currentUser && !currentFamily && currentView) && <h2>Select a family name to see your {currentView}</h2>}
        {(currentUser && currentFamily && !currentView) && <h2>Select Stories, Recipes or Photos!</h2>}
        {
          (currentUser && currentView && currentFamily) && 
          <div className='CardArea--div--title'>
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
  currentUser: state.currentUser,
  stories: state.stories,
  recipes: state.recipes,
  photos: state.photos
})
export default connect(mapStateToProps)(CardArea);

CardArea.propTypes = {
  currentView: PropTypes.string
}