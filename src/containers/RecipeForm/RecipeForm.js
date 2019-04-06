import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RecipeForm extends Component{

  render() {
    return(
      <form>

      </form>
    )
  }
};

export const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(RecipeForm);