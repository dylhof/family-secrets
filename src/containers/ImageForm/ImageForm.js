import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ImageForm extends Component{
  constructor() {
    super();
    this.state = {
      caption: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return(
      <div className='ImageForm--div'>
        <h3>Add a family photo:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className='ImageForm--input--image'
            type="file" 
            name="fotoUpload" 
            accept="image/*"/>
          <input 
            placeholder='Add a Caption'
            value={this.state.caption}
            name='caption'
            onChange={this.handleChange}
            />
          <button>Submit</button>
        </form>
      </div>
    )
  }
};

export const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(ImageForm);