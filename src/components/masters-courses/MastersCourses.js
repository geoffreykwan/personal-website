import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import SortableComponent from "../shared/SortableComponent";
import orderBy from "lodash/orderBy";
import CustomTableSortLabel from "../shared/CustomTableSortLabel";
import MenuButton from "../menu-button/MenuButton";

class MastersCourses extends SortableComponent {
  state = {
    loaded: false,
    courses: [],
    columnToSort: "courseNumber",
    sortDirection: "asc",
  };
  componentDidMount() {
    this.getMastersCourses();
  }
  getMastersCourses() {
    fetch(`${process.env.REACT_APP_API_URL}/masters-courses`, {
      method: "GET",
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
        style={{ color: "dodgerblue" }}
        rel="noopener noreferrer"
      >
        {course.site}
      </a>
    );
  }
  render() {
    return (
      <div style={this.state.loaded ? {} : { display: "none" }}>
        <div>
          <MenuButton
            menuButtonClickHandler={this.props.menuButtonClickHandler}
          />
          <h2>Master's Courses Completed</h2>
          <h3>Fordham University</h3>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <CustomTableSortLabel
                  columnName="courseNumber"
                  state={this.state}
                  handleSort={this.handleSort}
                >
                  Course Number
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
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              this.state.courses,
              [(course) => course[this.state.columnToSort].toLowerCase()],
              this.state.sortDirection
            ).map((course) => (
              <TableRow key={course.title} hover={true}>
                <TableCell>{course.courseNumber}</TableCell>
                <TableCell>{course.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="bottom-div"></div>
      </div>
    );
  }
}

export default MastersCourses;
