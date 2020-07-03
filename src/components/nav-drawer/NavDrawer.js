import React, { Component } from 'react';
import NavDrawerItem from './NavDrawerItem';
import { BsController, BsFillHouseFill } from 'react-icons/bs';
import {
  IoMdCalendar,
  IoMdRadio,
  IoMdTv,
  IoIosMusicalNotes,
} from 'react-icons/io';
import { FaCompactDisc } from 'react-icons/fa';

class NavDrawer extends Component {
  iconSize = '1.5em';
  render() {
    let navDrawerClasses = 'nav-drawer';
    if (this.props.show) {
      navDrawerClasses = 'nav-drawer open';
    }
    return (
      <nav className={navDrawerClasses}>
        <NavDrawerItem
          path="/online-courses"
          name="Online Courses Completed"
          icon={<BsFillHouseFill size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/favorite-essential-mixes"
          name="Favorite Essential Mixes"
          icon={<IoMdRadio size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/favorite-sets"
          name="Favorite Sets"
          icon={<FaCompactDisc size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/favorite-albums"
          name="Favorite Albums"
          icon={<IoIosMusicalNotes size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/favorite-shows"
          name="Favorite Shows"
          icon={<IoMdTv size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/favorite-games"
          name="Favorite Games"
          icon={<BsController size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/nintendo-switch-games"
          name="Nintendo Switch Games"
          icon={
            <img
              src="/images/nintendo-switch-icon.png"
              style={{ width: 15 }}
              alt="Switch Icon"
            />
          }
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
        <NavDrawerItem
          path="/release-dates"
          name="Release Dates"
          icon={<IoMdCalendar size={this.iconSize} />}
          toggleNavDrawer={this.props.toggleNavDrawer}
        />
      </nav>
    );
  }
}

export default NavDrawer;
