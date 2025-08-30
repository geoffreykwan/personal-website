import React, { Component } from "react";
import NavItem from "./NavItem";
import { BsController, BsMouse2Fill } from "react-icons/bs";
import {
  IoMdCalendar,
  IoMdHappy,
  IoMdRadio,
  IoMdTv,
  IoIosMusicalNotes,
} from "react-icons/io";
import { FaCompactDisc } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

class Nav extends Component {
  iconSize = "1.5em";
  render() {
    return (
      <div>
        <nav className="nav">
          <NavItem
            path="/masters-courses"
            name="Master's Courses Completed"
            icon={
              <img
                src="/images/fordham-logo.png"
                style={{ width: 18 }}
                alt="Fordham Icon"
              />
            }
          />
          <NavItem
            path="/bachelors-courses"
            name="Bachelor's Courses Completed"
            icon={
              <img
                src="/images/cal-logo.png"
                style={{ width: 18 }}
                alt="Cal Icon"
              />
            }
          />
          <NavItem
            path="/certifications"
            name="Certifications"
            icon={<PiCertificateFill size={this.iconSize} />}
          />
          <NavItem
            path="/online-courses"
            name="Online Courses Completed"
            icon={<BsMouse2Fill size={this.iconSize} />}
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
                style={{ width: 18 }}
                alt="Switch Icon"
              />
            }
          />
          <NavItem
            path="/release-dates"
            name="Release Dates"
            icon={<IoMdCalendar size={this.iconSize} />}
          />
          <NavItem
            path="/about"
            name="About"
            icon={<IoMdHappy size={this.iconSize} />}
          />
        </nav>
      </div>
    );
  }
}

export default Nav;
