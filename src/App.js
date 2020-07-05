import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './components/nav/Nav';
import NavDrawer from './components/nav-drawer/NavDrawer';
import Backdrop from './components/backdrop/Backdrop';
import About from './components/about/About';
import FavoriteEssentialMixes from './components/favorite-essential-mixes/FavoriteEssentialMixes';
import FavoriteSets from './components/favorite-sets/FavoriteSets';
import FavoriteAlbums from './components/favorite-albums/FavoriteAlbums';
import FavoriteGames from './components/favorite-games/FavoriteGames';
import OnlineCourses from './components/online-courses/OnlineCourses';
import ReleaseDates from './components/release-dates/ReleaseDates';
import ReleaseDate from './components/release-dates/ReleaseDate';
import FavoriteShows from './components/favorite-shows/FavoriteShows';
import NintendoSwitchGames from './components/nintendo-switch-games/NintendoSwitchGames';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

class App extends Component {
  state = {
    isNavDrawerOpen: false,
  };
  toggleNavDrawer = () => {
    this.setState((prevState) => {
      return { isNavDrawerOpen: !prevState.isNavDrawerOpen };
    });
  };
  render() {
    this.theme = createMuiTheme({
      palette: {
        type: 'dark',
        background: {
          default: '#222',
        },
      },
    });
    let backdrop;
    if (this.state.isNavDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.toggleNavDrawer} />;
    }
    return (
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />
        <div className="App" style={{ display: 'flex' }}>
          <Router>
            <Nav />
            <div className="main">
              <NavDrawer
                show={this.state.isNavDrawerOpen}
                toggleNavDrawer={this.toggleNavDrawer}
              />
              {backdrop}
              <Switch>
                <Route
                  path="/online-courses"
                  exact
                  render={() => {
                    return (
                      <OnlineCourses
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/favorite-essential-mixes"
                  exact
                  render={() => {
                    return (
                      <FavoriteEssentialMixes
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/favorite-sets"
                  exact
                  render={() => {
                    return (
                      <FavoriteSets
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/favorite-albums"
                  exact
                  render={() => {
                    return (
                      <FavoriteAlbums
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/favorite-shows"
                  exact
                  render={() => {
                    return (
                      <FavoriteShows
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/release-dates"
                  exact
                  render={(routeProps) => {
                    return (
                      <ReleaseDates
                        menuButtonClickHandler={this.toggleNavDrawer}
                        {...routeProps}
                      />
                    );
                  }}
                />
                <Route
                  path="/favorite-games"
                  exact
                  render={() => {
                    return (
                      <FavoriteGames
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/nintendo-switch-games"
                  exact
                  render={() => {
                    return (
                      <NintendoSwitchGames
                        menuButtonClickHandler={this.toggleNavDrawer}
                      />
                    );
                  }}
                />
                <Route
                  path="/about"
                  exact
                  render={() => {
                    return (
                      <About menuButtonClickHandler={this.toggleNavDrawer} />
                    );
                  }}
                />
                <Route
                  path="/release-date/:id"
                  render={(routeProps) => {
                    return (
                      <ReleaseDate
                        menuButtonClickHandler={this.toggleNavDrawer}
                        {...routeProps}
                      />
                    );
                  }}
                />
                <Route exact path="/">
                  <Redirect to="/online-courses" />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
