import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './components/nav/Nav';
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
  render() {
    this.theme = createMuiTheme({
      palette: {
        type: 'dark',
        background: {
          default: '#222',
        },
      },
    });
    return (
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />
        <div className="App" style={{ display: 'flex' }}>
          <Router>
            <div style={{ position: 'fixed' }}>
              <Nav />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: 20,
                marginBottom: 50,
                marginLeft: 100,
              }}
            >
              <Switch>
                <Route
                  path="/favorite-essential-mixes"
                  exact
                  component={FavoriteEssentialMixes}
                />
                <Route path="/favorite-sets" exact component={FavoriteSets} />
                <Route
                  path="/favorite-albums"
                  exact
                  component={FavoriteAlbums}
                />
                <Route path="/online-courses" exact component={OnlineCourses} />
                <Route path="/favorite-shows" exact component={FavoriteShows} />
                <Route path="/release-dates" exact component={ReleaseDates} />
                <Route path="/favorite-games" exact component={FavoriteGames} />
                <Route
                  path="/nintendo-switch-games"
                  exact
                  component={NintendoSwitchGames}
                />
                <Route path="/release-date/:id" component={ReleaseDate} />
                <Route exact path="/">
                  <Redirect to="/favorite-essential-mixes" />
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
