import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ImageForm extends Component{

  render() {
    return(
      <form>

      </form>
    )
  }
};

export const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(ImageForm);