import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentView, setCurrentFamily } from '../../actions';
import * as mockData from '../../mockData';

export class NavBar extends Component{
  setView = (event) => {
    this.props.setCurrentView(event.target.innerText);
  }
  
  generateOptions = () => {
    const options = mockData.families.map(family => {
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
  
  render() {
    return(
      <nav className='NavBar--nav'>
        <select onChange={this.setFamily}>
          <option value=''>Select a Family</option>
          {this.generateOptions()}
        </select>
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
  setCurrentFamily: (id) => dispatch(setCurrentFamily(id))
});

export default connect(null, mapDispatchToProps)(NavBar);