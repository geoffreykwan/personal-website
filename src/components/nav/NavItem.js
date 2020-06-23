import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

class NavItem extends Component {
  render() {
    return (
      <NavLink
        to={this.props.path}
        className="nav-item"
        activeClassName="activeLink"
      >
        <div className="nav-item-div">
          {this.props.icon}
          <div style={{ width: 80, marginTop: 5 }}>{this.props.name}</div>
        </div>
      </NavLink>
    );
  }
}

export default NavItem;
