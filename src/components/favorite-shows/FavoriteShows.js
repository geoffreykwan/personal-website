import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import orderBy from 'lodash/orderBy';
import SortableComponent from '../shared/SortableComponent';
import CustomTableSortLabel from '../shared/CustomTableSortLabel';

class FavoriteShows extends SortableComponent {
  state = {
    loaded: false,
    shows: [],
    columnToSort: 'rank',
    sortDirection: 'desc',
  };
  componentDidMount() {
    this.getFavoriteShows();
  }
  getFavoriteShows() {
    fetch(`${process.env.REACT_APP_API_URL}/favorite-shows`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((shows) => {
        this.setState({ shows: shows, loaded: true });
      });
  }
  createAmazonLink(show) {
    if (show.amazon != null) {
      return (
        <a
          href={show.amazon}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          Amazon
        </a>
      );
    } else {
      return '';
    }
  }
  createHuluLink(show) {
    if (show.hulu != null) {
      return (
        <a
          href={show.hulu}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          Hulu
        </a>
      );
    } else {
      return '';
    }
  }
  createNetflixLink(show) {
    if (show.netflix != null) {
      return (
        <a
          href={show.netflix}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          Netflix
        </a>
      );
    } else {
      return '';
    }
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <h2>My Top 10 Favorite Shows</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <CustomTableSortLabel
                  columnName="rank"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Rank
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>
                <CustomTableSortLabel
                  columnName="title"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Title
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>Amazon</TableCell>
              <TableCell>Hulu</TableCell>
              <TableCell>Netflix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.shows,
              [
                (show) => {
                  if (this.state.columnToSort === 'rank') {
                    return show[this.state.columnToSort];
                  } else {
                    return show[this.state.columnToSort].toLowerCase();
                  }
                },
              ],
              this.state.sortDirection
            ).map((show) => (
              <TableRow key={show.rank} hover={true}>
                <TableCell style={{ textAlign: 'center' }}>
                  {show.rank}
                </TableCell>
                <TableCell>{show.title}</TableCell>
                <TableCell>{this.createAmazonLink(show)}</TableCell>
                <TableCell>{this.createHuluLink(show)}</TableCell>
                <TableCell>{this.createNetflixLink(show)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default FavoriteShows;
