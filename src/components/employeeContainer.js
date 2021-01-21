import React, { Component } from "react";
import Container from "./Container";
import Col from "./Col";
import Card from "./Card";
import Wrapper from "./Wrapper";
import SearchForm from "./SearchForm";

import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for specific employee
  componentDidMount() {
    this.firstEmployee()
  }

  firstEmployee = () => {
    API.getUsers()
    .then(res =>
      this.setState({result: res.data.results})
      )
      .catch(err => console.log(err));
  }; 

  searchEmployee = (query) => {
    console.log(query)
    API.getUsers(query)
      .then(res => this.setState({ result: res.data.results }))
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
    const filteredResults = this.state.result.filter(person => person.name.first.includes(this.state.search))
    console.log(this.state.search);
    this.setState({result: filteredResults});
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Col>
              <h2>Employee Directory</h2>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>


          <div className="row">
            <Col>
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {[...this.state.result].map((item) => (
                    <Card
                      picture={item.picture.medium}
                      firstName={item.name.first}
                      lastName={item.name.last}
                      email={item.email}
                      phone={item.phone}
                      dob={item.dob.date}
                      key={item.key}
                    />
                  ))}
                </tbody>
              </table>
            </Col>
          </div>
        </div>
      </Wrapper>
    )
  }
}
export default EmployeeContainer;
