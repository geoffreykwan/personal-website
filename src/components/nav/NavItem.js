import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

class NavItem extends Component {
  render() {
    return (
      <NavLink
        to={this.props.path}
        activeClassName="activeLink"
        style={{ textDecoration: 'none' }}
      >
        <div>
          <div
            style={{
              width: 100,
              height: 100,
              color: 'white',
              outline: '1px solid black',
              fontSize: '0.875em',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {this.props.icon}
            <div style={{ width: 80, marginTop: 5 }}>{this.props.name}</div>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default NavItem;
