import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentView, setCurrentFamily } from '../../actions';
import { apiThunk } from '../../thunks/apiThunk';
import FamilyForm from '../FamilyForm/FamilyForm';
// import * as mockData from '../../mockData';

export class NavBar extends Component{
  constructor(){
    super();
    this.state = {
      showAddFamily: false
    }
  }

  setView = (event) => {
    const {currentFamily} = this.props
    let view = event.target.innerText.toLowerCase();
    if(view === 'photos') {
      view = 'images'
    }; 
    const content = this.props[view].filter(item => {
      return parseInt(item.family_id) === currentFamily
    })
    // Add check for images remove when we get images up and running on the BE
    if( !content.length && currentFamily && view !== 'images') {
      this.props.apiThunk(`families/${currentFamily}/${view}`, `set${event.target.innerText}`)
    }
    this.props.setCurrentView(view);
  }
  
  generateOptions = () => {
    const { families } = this.props   
    const options = families.map(family => {
      return (
        <option key={family.id} value={family.id}>{family.name}</option>
      )
    });
    return options
  }

  setFamily = (event) => {
    const id = parseInt(event.target.value);
    this.props.setCurrentFamily(id);     
  }

  showAddFamily = () => {
    this.setState({showAddFamily: !this.state.showAddFamily})
  }
  
  render() {
    const {currentUser} = this.props;
    return(
      <nav className='NavBar--nav'>
        <div className='NavBar--div--select'>
          <select onChange={this.setFamily}>
            <option value=''>Select a Family</option>
            {this.generateOptions()}
          </select>
          {currentUser && <i className="fas fa-plus" onClick={this.showAddFamily}></i>}
        </div>
        {currentUser && this.state.showAddFamily && <FamilyForm showForm={this.showAddFamily}/>}
        <ul>
          <li onClick={this.setView}>Stories</li>
          <li onClick={this.setView}>Photos</li>
          <li onClick={this.setView}>Recipes</li>
        </ul>
      </nav>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentView: (currentView) => dispatch(setCurrentView(currentView)),
  setCurrentFamily: (id) => dispatch(setCurrentFamily(id)),
  apiThunk: (path, action) => dispatch(apiThunk(path, action))
});

export const mapStateToProps = state => ({
  families: state.families,
  currentFamily: state.currentFamily,
  stories: state.stories,
  recipes: state.recipes,
  images: state.photos,
  currentUser: state.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);