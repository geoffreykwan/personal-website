import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import SortableComponent from '../shared/SortableComponent';
import orderBy from 'lodash/orderBy';
import CustomTableSortLabel from '../shared/CustomTableSortLabel';

class OnlineCourses extends SortableComponent {
  state = {
    loaded: false,
    courses: [],
    columnToSort: 'site',
    sortDirection: 'asc',
  };
  componentDidMount() {
    this.getOnlineCourses();
  }
  getOnlineCourses() {
    fetch(`${process.env.REACT_APP_API_URL}/online-courses`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((courses) => {
        this.setState({ courses: courses, loaded: true });
      });
  }
  createLink(course) {
    return (
      <a
        href={course.link}
        target="_blank"
        style={{ color: 'dodgerblue' }}
        rel="noopener noreferrer"
      >
        {course.site}
      </a>
    );
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: 'none' }}>
        <h2>Online Courses Completed</h2>
        <Table>
          <TableHead>
            <TableRow>
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
                  columnName="organization"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Organization
                </CustomTableSortLabel>
              </TableCell>
              <TableCell>
                <CustomTableSortLabel
                  columnName="site"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Link
                </CustomTableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.courses,
              [(course) => course[this.state.columnToSort].toLowerCase()],
              this.state.sortDirection
            ).map((course) => (
              <TableRow key={course.title} hover={true}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.organization}</TableCell>
                <TableCell>{this.createLink(course)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default OnlineCourses;
