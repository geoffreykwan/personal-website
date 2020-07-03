import React from 'react';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import orderBy from 'lodash/orderBy';
import SortableComponent from '../shared/SortableComponent';
import CustomTableSortLabel from '../shared/CustomTableSortLabel';
import MenuButton from '../menu-button/MenuButton';

class ReleaseDates extends SortableComponent {
  state = {
    loaded: false,
    releaseDates: [],
    columnToSort: 'date',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getReleaseDates();
  }
  getReleaseDates() {
    fetch(`${process.env.REACT_APP_API_URL}/release-dates`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((releaseDates) => {
        this.setState({ releaseDates: releaseDates, loaded: true });
      });
  }
  hideReleasedItemsAfter30Days(items) {
    const today = moment().startOf('day');
    return items.filter((item) => {
      const releaseDate = moment(item.date);
      return today.diff(releaseDate, 'day') < 30;
    });
  }
  goToReleaseDatePage(id) {
    this.props.history.push('/release-date/' + id);
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <div className="page-title-container">
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2 className="page-title">Release Dates</h2>
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
                  columnName="date"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Release Date
                </CustomTableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.hideReleasedItemsAfter30Days(this.state.releaseDates),
              [
                (releaseDate) =>
                  releaseDate[this.state.columnToSort].toLowerCase(),
              ],
              this.state.sortDirection
            ).map((releaseDate) => (
              <TableRow
                key={releaseDate.id}
                onClick={() => {
                  this.goToReleaseDatePage(releaseDate.id);
                }}
                style={{ cursor: 'pointer' }}
                hover={true}
              >
                <TableCell>{releaseDate.name}</TableCell>
                <TableCell>{releaseDate.system}</TableCell>
                <TableCell>{releaseDate.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ReleaseDates;
