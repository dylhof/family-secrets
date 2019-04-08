import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOptions } from '../../utils/fetch';
import { apiThunk } from '../../thunks/apiThunk'


export class FamilyForm extends Component{
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const options = createOptions('POST', {name: this.state.name});
    this.props.apiThunk('families', 'addFamily', options)
    this.setState({name: ''})
    this.props.showForm()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Family Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  apiThunk: (path, action, options) => dispatch(apiThunk(path, action, options))
})

export default connect(null, mapDispatchToProps)(FamilyForm);