import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import CardArea from '../../containers/CardArea/CardArea';


export class App extends Component {

  render() {
    const { error, isLoading} = this.props
    return (
      <div className="App">
        <Header/>
        <NavBar/>
        <CardArea/>
        {error && <Error/>}
        {isLoading && <Loading/>}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool
}