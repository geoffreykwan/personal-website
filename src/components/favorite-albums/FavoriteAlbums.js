import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import SortableComponent from '../shared/SortableComponent';
import orderBy from 'lodash/orderBy';
import CustomTableSortLabel from '../shared/CustomTableSortLabel';
import MenuButton from '../menu-button/MenuButton';

class FavoriteAlbums extends SortableComponent {
  state = {
    loaded: false,
    albums: [],
    columnToSort: 'artist',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getFavoriteAlbums();
  }
  getFavoriteAlbums() {
    fetch(`${process.env.REACT_APP_API_URL}/favorite-albums`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((albums) => {
        this.setState({ albums: albums, loaded: true });
      });
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <div className="page-title-container">
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2 className="page-title">My Favorite Albums</h2>
        </div>
        <Table>
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
              <TableCell>Listen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.albums,
              [(album) => album[this.state.columnToSort].toLowerCase()],
              this.state.sortDirection
            ).map((album) => (
              <TableRow key={`${album.artist}-${album.title}`} hover={true}>
                <TableCell>{album.artist}</TableCell>
                <TableCell>{album.title}</TableCell>
                <TableCell>{this.createLink(album)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="bottom-div"></div>
      </div>
    );
  }
}

export default FavoriteAlbums;
