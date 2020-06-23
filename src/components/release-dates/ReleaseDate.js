import React, { Component } from 'react';
import moment from 'moment';

class ReleaseDate extends Component {
  state = {
    loaded: false,
    item: {},
  };
  componentDidMount() {
    this.getReleaseDate();
  }
  getReleaseDate() {
    const id = this.props.match.params.id;
    fetch(`${process.env.REACT_APP_API_URL}/release-date/${id}`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const item = res.Item;
        const releaseDate = moment(item.date);
        const today = moment().startOf('day');
        const totalDaysRemaining = releaseDate.diff(today, 'day');
        const monthsRemaining = Math.floor(totalDaysRemaining / 30);
        const daysRemaining = totalDaysRemaining % 30;
        const timeRemainingText = this.getTimeRemainingText(
          monthsRemaining,
          daysRemaining
        );
        this.setState({ item: item, timeRemainingText: timeRemainingText });
      });
  }
  getTimeRemainingText(months, days) {
    if (this.isReleased(months, days)) {
      return 'Released';
    } else {
      let text = '';
      if (months > 0) {
        const monthsText = months === 1 ? 'Month' : 'Months';
        text += `${months} ${monthsText} and `;
      }
      const daysText = days === 1 ? 'Day' : 'Days';
      text += `${days} ${daysText} `;
      text += 'Remaining';
      return text;
    }
  }
  isReleased(months, days) {
    return months <= 0 && days <= 0;
  }
  handleImageLoad() {
    this.setState({ loaded: true });
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <p style={{ marginTop: 100 }}>
          <a
            href={this.state.item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/images/${this.state.item.logo}`}
              alt="Game Logo"
              style={{ width: 400 }}
              onLoad={() => {
                this.handleImageLoad();
              }}
            ></img>
          </a>
        </p>
        <h1>{moment(this.state.item.date).format('MMMM D YYYY')}</h1>
        <h3>{this.state.timeRemainingText}</h3>
      </div>
    );
  }
}

export default ReleaseDate;
