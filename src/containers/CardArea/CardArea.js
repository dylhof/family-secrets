import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const CardArea = (props) => {
  const { currentView } = props;
  return (
    <div className='CardArea--div'>
      <h2>My Family {currentView}</h2>
    </div>
  )
}

export const mapStateToProps = state => ({
  currentView: state.currentView
})
export default connect(mapStateToProps)(CardArea);

CardArea.propTypes = {
  currentView: PropTypes.string
}