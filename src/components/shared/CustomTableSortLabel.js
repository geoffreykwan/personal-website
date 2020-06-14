import React, { Component } from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class CustomTableSortLabel extends Component {
  render() {
    return (
      <TableSortLabel
        active={this.props.state.columnToSort === this.props.columnName}
        direction={this.props.state.sortDirection}
        onClick={() => {
          this.props.handleSort(this.props.columnName);
        }}
      >
        {this.props.children}
      </TableSortLabel>
    );
  }
}

export default CustomTableSortLabel;
