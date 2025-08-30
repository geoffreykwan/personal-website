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

class Certifications extends SortableComponent {
  state = {
    loaded: false,
    certifications: [],
    columnToSort: "organization",
    sortDirection: "asc",
  };
  componentDidMount() {
    this.getCertifications();
  }
  getCertifications() {
    fetch(`${process.env.REACT_APP_API_URL}/certifications`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((certifications) => {
        this.setState({ certifications: certifications, loaded: true });
      });
  }
  createLink(certification) {
    return (
      <a
        href={certification.link}
        target="_blank"
        style={{ color: "dodgerblue" }}
        rel="noopener noreferrer"
      >
        {certification.site}
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
          <h2>Certifications</h2>
        </div>
        <Table>
          <TableHead>
            <TableRow>
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
              this.state.certifications,
              [
                (certification) =>
                  certification[this.state.columnToSort].toLowerCase(),
              ],
              this.state.sortDirection
            ).map((certification) => (
              <TableRow key={certification.title} hover={true}>
                <TableCell>{certification.organization}</TableCell>
                <TableCell>{certification.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="bottom-div"></div>
      </div>
    );
  }
}

export default Certifications;
