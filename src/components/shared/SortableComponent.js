import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

class SortableComponent extends Component {
  state = {
    essentialMixes: [],
    loaded: false,
    columnToSort: 'artist',
    sortDirection: 'asc',
  };
  constructor() {
    super();
    this.theme = createMuiTheme({
      palette: {
        type: 'dark',
        background: {
          default: '#222',
        },
      },
    });
    this.invertDirection = {
      asc: 'desc',
      desc: 'asc',
    };
  }
  createLink(item) {
    let href = '';
    let site = '';
    if (item.soundcloud != null) {
      href = item.soundcloud;
      site = 'SoundCloud';
    } else if (item.youtube != null) {
      href = item.youtube;
      site = 'YouTube';
    } else if (item.spotify != null) {
      href = item.spotify;
      site = 'Spotify';
    } else if (item.mixcloud != null) {
      href = item.mixcloud;
      site = 'Mixcloud';
    } else if (item.mixriot != null) {
      href = item.mixriot;
      site = 'Mixriot';
    } else if (item.bandcamp != null) {
      href = item.bandcamp;
      site = 'Bandcamp';
    }
    return (
      <a
        href={href}
        target="_blank"
        style={{ color: 'dodgerblue' }}
        rel="noopener noreferrer"
      >
        {site}
      </a>
    );
  }
  handleSort = (columnName) => {
    this.setState((state) => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? this.invertDirection[state.sortDirection]
          : 'asc',
    }));
  };
}

export default SortableComponent;
