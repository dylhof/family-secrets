import React, {Component} from 'react';

export class NavBar extends Component{
  render() {
    return(
      <nav>
        <select>
          <option>Select a Family</option>
        </select>
        <ul>
          <li>Stories</li>
          <li>Photos</li>
          <li>Recipies</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;