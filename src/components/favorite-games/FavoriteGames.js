import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import orderBy from 'lodash/orderBy';
import SortableComponent from '../shared/SortableComponent';
import CustomTableSortLabel from '../shared/CustomTableSortLabel';
import MenuButton from '../menu-button/MenuButton';

class FavoriteGames extends SortableComponent {
  state = {
    loaded: false,
    games: [],
    columnToSort: 'year',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getFavoriteGames();
  }
  getFavoriteGames() {
    fetch(`${process.env.REACT_APP_API_URL}/favorite-games`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((games) => {
        this.setState({ games: games, loaded: true });
      });
  }
  createVideoLink(game) {
    if (game.video != null) {
      return (
        <a
          href={game.video}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          Video
        </a>
      );
    } else {
      return '';
    }
  }
  createWikiLink(game) {
    return (
      <a
        href={game.wiki}
        target="_blank"
        style={{ color: 'dodgerblue' }}
        rel="noopener noreferrer"
      >
        Wiki
      </a>
    );
  }
  createBuyLink(game) {
    if (game.buy != null) {
      return (
        <a
          href={game.buy}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          Buy
        </a>
      );
    } else {
      return '';
    }
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <div className="page-title-container">
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2 className="page-title">My Top 10 Favorite Games of All Time</h2>
        </div>
        <Table className="main-table">
          <TableHead>
            <TableRow>
              <TableCell>
                <CustomTableSortLabel
                  columnName="name"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Name
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>
                <CustomTableSortLabel
                  columnName="system"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  System
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>
                <CustomTableSortLabel
                  columnName="year"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Release Year
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>Video</TableCell>
              <TableCell>Wiki</TableCell>
              <TableCell>Buy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.games,
              [
                (game) => {
                  if (this.state.columnToSort === 'year') {
                    return game[this.state.columnToSort];
                  } else {
                    return game[this.state.columnToSort].toLowerCase();
                  }
                },
              ],
              this.state.sortDirection
            ).map((game) => (
              <TableRow key={game.name} hover={true}>
                <TableCell>{game.name}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  {game.system}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  {game.year}
                </TableCell>
                <TableCell>{this.createVideoLink(game)}</TableCell>
                <TableCell>{this.createWikiLink(game)}</TableCell>
                <TableCell>{this.createBuyLink(game)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default FavoriteGames;
