import React, { Component } from 'react';
import Moment from 'moment';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class EssentialMix extends Component {
  createLink(essentialMix) {
    if (essentialMix.soundcloud != null) {
      return (
        <a
          href={essentialMix.soundcloud}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          SoundCloud
        </a>
      );
    } else if (essentialMix.youtube != null) {
      return (
        <a
          href={essentialMix.youtube}
          target="_blank"
          style={{ color: 'dodgerblue' }}
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      );
    }
  }
  render() {
    const { essentialMix } = this.props;
    return (
      <TableRow hover={true}>
        <TableCell>{essentialMix.artist}</TableCell>
        <TableCell>{Moment(essentialMix.date).format('YYYY-MM-DD')}</TableCell>
        <TableCell>{this.createLink(essentialMix)}</TableCell>
      </TableRow>
    );
  }
}

export default EssentialMix;
