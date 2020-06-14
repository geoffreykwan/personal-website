import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

class NavItem extends Component {
  render() {
    return (
      <NavLink to={this.props.path} activeClassName="activeLink">
        <div>
          <button
            style={{
              width: 100,
              height: 100,
              color: 'white',
              border: '1px solid black',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {this.props.icon}
            <br />
            {this.props.name}
          </button>
        </div>
      </NavLink>
    );
  }
}

export default NavItem;
