import React,{Component} from 'react'
import {connect} from 'react-redux'
// goes at the top of every everything
// this only exports for test
export class StoryForm extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      story: ''
    }
  }

  changeHandler = event => {
    this.setState({
      title: event.target.value
    });
  }
  changeHandler = event => {
    this.setState({
      story: event.target.value
    });
  }

  render(){
    // every render can only return one thing (divs can have lots of things)
    return(
      <div>
       <form>
       <label>"Title"</label>
       <input type="title"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
       </input>
       <label>"Story"</label>
       <input type="story"
              name="story"
              value={this.state.story}
              onChange={this.changeHandler}
       </input>
       </form>
      </div>

    )
  }
}
// connect ot redux

export const mapDispatchToProps = (dispatch) => ({
  // properties
  // Create an action TO DO

})
// acctually exorts the connected Component to redux

// 1st arg maps state to props the second allways maps dispatch to props

export default connect(null, mapDispatchToProps)(StoryForm)

import React, { Component } from 'react';
