import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomTableSortLabel from '../shared/CustomTableSortLabel';
import EssentialMix from './EssentialMix';

class EssentialMixesList extends Component {
  render() {
    const { essentialMixes } = this.props;
    return (
      <Table style={{ maxWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <CustomTableSortLabel
                columnName="artist"
                state={this.props.state}
                handleSort={this.props.handleSort}
              >
                Artist
              </CustomTableSortLabel>
            </TableCell>
            <TableCell>
              <CustomTableSortLabel
                columnName="date"
                state={this.props.state}
                handleSort={this.props.handleSort}
              >
                Date
              </CustomTableSortLabel>
            </TableCell>
            <TableCell>Listen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {essentialMixes.map((essentialMix) => (
            <EssentialMix
              key={`${essentialMix.artist}-${essentialMix.date}`}
              essentialMix={essentialMix}
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default EssentialMixesList;
