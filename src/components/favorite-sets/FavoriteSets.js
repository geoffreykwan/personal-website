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

class FavoriteSets extends SortableComponent {
  state = {
    loaded: false,
    sets: [],
    columnToSort: 'artist',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getFavoriteSets();
  }
  getFavoriteSets() {
    fetch(`${process.env.REACT_APP_API_URL}/favorite-sets`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((sets) => {
        this.setState({ sets: sets, loaded: true });
      });
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <div className="page-title-container">
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2 className="page-title">My Favorite Sets</h2>
        </div>
        <Table className="main-table">
          <TableHead>
            <TableRow>
              <TableCell>
                <CustomTableSortLabel
                  columnName="artist"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Artist
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
              <TableCell>
                <CustomTableSortLabel
                  columnName="date"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Date
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>Listen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.sets,
              [(set) => set[this.state.columnToSort].toLowerCase()],
              this.state.sortDirection
            ).map((set) => (
              <TableRow key={set.artist + ' - ' + set.title} hover={true}>
                <TableCell>{set.artist}</TableCell>
                <TableCell>{set.title}</TableCell>
                <TableCell>{set.date}</TableCell>
                <TableCell>{this.createLink(set)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default FavoriteSets;
