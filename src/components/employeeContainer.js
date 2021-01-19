import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Detail from "./Detail";
import API from "../utils/API";

class employeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for specific employee
  componentDidMount() {
    this.searchEmployee("");
  }

  searchEmployee = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Employee API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <h2>Employee Directory</h2>
          <Card heading="Search">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Card>
        </Row>
        <Row>
          <Card>
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>
              {[...this.state.employees].map((item) => (
                <EmployeeCard
                  picture={item.picture}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  phone={item.phone}
                  city={item.city}
                  key={item.key}
                />
              ))}
            </table>
          </Card>
        </Row>
      </Container>
    );
  }
}
export default employeeContainer;
