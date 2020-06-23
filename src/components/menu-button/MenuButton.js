import React, { Component } from 'react';

import './MenuButton.css';

class MenuButton extends Component {
  render() {
    return (
      <div className="menu-button" onClick={this.props.menuButtonClickHandler}>
        <div className="menu-button-line"></div>
        <div className="menu-button-line"></div>
        <div className="menu-button-line"></div>
      </div>
    );
  }
}

export default MenuButton;
