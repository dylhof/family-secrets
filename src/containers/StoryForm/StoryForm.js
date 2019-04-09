import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiThunk } from '../../thunks/apiThunk';
import { createOptions } from '../../utils/fetch';

export class StoryForm extends Component{

  onSubmit = (event) => {
    event.preventDefault()
    const { currentFamily } = this.props
    const options = createOptions('POST', {title: 'Awesome Story', content:'lalalala great story'})
    this.props.apiThunk(`/families/${currentFamily}/stories`, 'addStory', options)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <button>submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);