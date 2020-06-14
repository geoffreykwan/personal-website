import React from 'react';
import EssentialMixesList from './EssentialMixesList';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import orderBy from 'lodash/orderBy';
import SortableComponent from '../shared/SortableComponent';

class FavoriteEssentialMixes extends SortableComponent {
  state = {
    essentialMixes: [],
    loaded: false,
    columnToSort: 'artist',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getFavoriteEssentialMixes();
  }
  getFavoriteEssentialMixes() {
    fetch(`${process.env.REACT_APP_API_URL}/favorite-essential-mixes`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((essentialMixes) => {
        this.setState({ essentialMixes: essentialMixes, loaded: true });
      });
  }
  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <div style={this.state.loaded ? {} : { display: 'none' }}>
          <CssBaseline />
          <div>
            <h2>My Favorite Essential Mixes</h2>
            <EssentialMixesList
              essentialMixes={orderBy(
                this.state.essentialMixes,
                [(em) => em[this.state.columnToSort].toLowerCase()],
                this.state.sortDirection
              )}
              state={this.state}
              handleSort={this.handleSort}
              columnToSort={this.state.columnToSort}
              sortDirection={this.state.sortDirection}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FavoriteEssentialMixes;
