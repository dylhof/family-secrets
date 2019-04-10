import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, logoutCurrentUser } from '../../actions';
import { apiThunk } from '../../thunks/apiThunk';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      showLogin: false
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.apiThunk('/families', 'setFamilies')
    this.props.setCurrentUser(1, 'Dylan', 'dylan@dylan.org');
    this.setState({email: '', password: ''})
  }

  logOut = () => {
    this.props.logoutCurrentUser()
  }

  toggleLogin = () => {
    this.setState({showLogin: !this.state.showLogin})
  }

  render () {
    const { currentUser } = this.props;
    const { showLogin, name, password } = this.state
    return(
      <header className='Header--header'>
        <h1>Family Secrets</h1>
        <div>
          {(!currentUser && !showLogin) && 
          <button onClick={this.toggleLogin}>Login</button>}
          {(!currentUser && showLogin) &&
          <div className='Header--div--form'>
            <form onSubmit={this.handleSubmit}>
              <input 
                onChange={this.handleChange}
                placeholder='Email'
                name='email'
                type='email'
                value={name}/>           
              <input
                onChange={this.handleChange}
                placeholder='password'
                name='password'
                type='password'
                value={password}/>
              <button>Login</button>
            </form>
            <button onClick={this.toggleLogin}>Cancel</button>
          </div> }
          {currentUser && 
          <div>
            <p>Hello {currentUser.name}!</p>
            <img 
              src='https://i.imgur.com/pmla6oJ.jpg' 
              alt='You'
              className='Header--img'/>
            <button onClick={this.logOut}>LogOut</button>
          </div>
          }
        </div>
      </header>
    )
  };
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export const mapDispatchToProps = dispatch => ({
  setCurrentUser: (id, name, email) => dispatch(setCurrentUser(id, name, email)),
  logoutCurrentUser: () => dispatch(logoutCurrentUser()),
  apiThunk: (path, action) => dispatch(apiThunk(path, action))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);