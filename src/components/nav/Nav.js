import React, { Component } from 'react';
import NavItem from './NavItem';
import { BsController, BsFillHouseFill } from 'react-icons/bs';
import {
  IoMdCalendar,
  IoMdRadio,
  IoMdTv,
  IoIosMusicalNotes,
} from 'react-icons/io';
import { FaCompactDisc } from 'react-icons/fa';

class Nav extends Component {
  iconSize = '1.5em';
  render() {
    return (
      <div>
        <nav className="nav">
          <NavItem
            path="/online-courses"
            name="Online Courses Completed"
            icon={<BsFillHouseFill size={this.iconSize} />}
          />
          <NavItem
            path="/favorite-essential-mixes"
            name="Favorite Essential Mixes"
            icon={<IoMdRadio size={this.iconSize} />}
          />
          <NavItem
            path="/favorite-sets"
            name="Favorite Sets"
            icon={<FaCompactDisc size={this.iconSize} />}
          />
          <NavItem
            path="/favorite-albums"
            name="Favorite Albums"
            icon={<IoIosMusicalNotes size={this.iconSize} />}
          />
          <NavItem
            path="/favorite-shows"
            name="Favorite Shows"
            icon={<IoMdTv size={this.iconSize} />}
          />
          <NavItem
            path="/favorite-games"
            name="Favorite Games"
            icon={<BsController size={this.iconSize} />}
          />
          <NavItem
            path="/nintendo-switch-games"
            name="Nintendo Switch Games"
            icon={
              <img
                src="/images/nintendo-switch-icon.png"
                style={{ width: 20 }}
                alt="Switch Icon"
              />
            }
          />
          <NavItem
            path="/release-dates"
            name="Release Dates"
            icon={<IoMdCalendar size={this.iconSize} />}
          />
        </nav>
      </div>
    );
  }
}

export default Nav;
