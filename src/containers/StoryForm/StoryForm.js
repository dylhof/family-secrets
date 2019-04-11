import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiThunk } from '../../thunks/apiThunk';
import { createOptions } from '../../utils/fetch';

export class StoryForm extends Component{
  constructor (props) {
    super(props);
    this.state = {
      title: this.props.item.title || '',
      content: this.props.item.content || '',
      author: this.props.item.author || ''
    }
  }
  onSubmit = (event) => {
    event.preventDefault()
    const { currentFamily, showForm } = this.props
    const newStory = {
      title: this.state.title, 
      content: this.state.content, 
      family_id: currentFamily, 
      author: this.state.author}
    const options = createOptions('POST', newStory)
    this.props.apiThunk(`families/${currentFamily}/stories`, 'addStory', options)
    showForm()
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { currentFamily } = this.props
    const options = createOptions('POST', {title: 'Awesome Story', content:'lalalala great story'})
    this.props.apiThunk(`families/${currentFamily}/stories`, 'addStory', options)
  }

  render() {
    return(
      <div className='StoryForm--div'>
        <h3>Add a family story:</h3>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder='Add a Title'
            value={this.state.title}
            name='title'
            onChange={this.handleChange}/>
          <input
            className='StoryForm--div--storyInput'
            placeholder='Add your Story'
            value={this.state.content}
            name='content'
            onChange={this.handleChange}/>
            <input
            placeholder='Add an author'
            value={this.state.author}
            name='author'
            onChange={this.handleChange}/>
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