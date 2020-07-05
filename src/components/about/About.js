import React, { Component } from 'react';
import MenuButton from '../menu-button/MenuButton';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="page-title-container">
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2 className="page-title">About</h2>
        </div>
        <div>
          <img
            src="/images/profile.gif"
            style={{ width: 200 }}
            alt="Profile"
          ></img>
          <p>
            I created this page to learn how to use React, Lambda, and DynamoDB.
          </p>
          <p>
            <a
              href="https://github.com/geoffreykwan"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size="3em"></IoLogoGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/geoffrey-kwan"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size="3em"></IoLogoLinkedin>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
