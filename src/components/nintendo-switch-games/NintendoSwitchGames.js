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

class NintendoSwitchGames extends SortableComponent {
  state = {
    loaded: false,
    games: [],
    columnToSort: 'name',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getNintendoSwitchGames();
  }
  getNintendoSwitchGames() {
    fetch(`${process.env.REACT_APP_API_URL}/nintendo-switch-games`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((games) => {
        this.setState({ games: games, loaded: true });
      });
  }
  createBuyLink(game) {
    if (game.eshop != null) {
      return (
        <a
          href={game.eshop}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          Eshop
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
          <h2 className="page-title">My Nintendo Switch Games</h2>
        </div>
        <Table>
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
                  columnName="releaseDate"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Release Date
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>
                <CustomTableSortLabel
                  columnName="size"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Size
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>Buy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.games,
              [
                (game) => {
                  if (this.state.columnToSort === 'size') {
                    return parseFloat(
                      game.size.substring(0, game.size.indexOf(' '))
                    );
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
                  {game.releaseDate}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  {game.size}
                </TableCell>
                <TableCell>{this.createBuyLink(game)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="bottom-div"></div>
      </div>
    );
  }
}

export default NintendoSwitchGames;
