import React from 'react';
import EssentialMixesList from './EssentialMixesList';
import orderBy from 'lodash/orderBy';
import SortableComponent from '../shared/SortableComponent';
import MenuButton from '../menu-button/MenuButton';
import '../../App.css';

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
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <div className="page-title-container">
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2 className="page-title">My Favorite Essential Mixes</h2>
        </div>
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
    );
  }
}

export default FavoriteEssentialMixes;
