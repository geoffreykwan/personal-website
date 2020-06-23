import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavDrawer.css';

class NavDrawerItem extends Component {
  render() {
    return (
      <NavLink
        to={this.props.path}
        className="nav-drawer-item"
        activeClassName="activeLink"
        onClick={this.props.toggleNavDrawer}
      >
        <div className="nav-drawer-item-div">
          {this.props.icon}
          <div style={{ marginLeft: 10 }}>{this.props.name}</div>
        </div>
      </NavLink>
    );
  }
}

export default NavDrawerItem;
