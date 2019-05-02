import React, { Component } from "react";
import Navbar from "../common/Navbar/Navbar";

import axios from "axios";
import Pagination from "../common/Pagination/pagination";
import { paginate } from "../../utils/paginate";

import { Link } from "react-router-dom";
import "./SearchDoctor.css";
import "bootstrap/dist/css/bootstrap.min.css";
class SearchDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: "",
      speciality: "",
      name: "",
      ratings: "",
      result: [],
      pageSize: 3,
      currentPage: 1
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handlePageChange = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const data = {
      area: this.state.area,
      speciality: this.state.speciality,
      name: this.state.name,
      ratings: this.state.ratings
    };
    axios
      .post("http://54.193.24.133:5000/doctor/doctors", data)
      .then(response => {
        if (response.status === 200) {
          console.log("Searched successfully");
          console.log("Response data", response);
          console.log("Response data", response.data);

          const result = response.data;
          console.log("Result ", result);

          this.setState({
            result: result
          });
        } else {
          this.setState({
            result: []
          });
        }
      });
  };
  render() {
    let count = this.state.result.length;
    const { pageSize, currentPage } = this.state;

    const paginatedresult = paginate(this.state.result, currentPage, pageSize);

    let alldetails = paginatedresult.map(doctor => {
      return (
        <div class="media-body cardstyle">
          <h4 class="card-title p-2 mt-2 ">
            <Link
              to={{
                pathname: "/fulldetails",
                state: {
                  area: doctor.area,
                  speciality: doctor.speciality,
                  name: doctor.name,
                  ratings: doctor.ratings,
                  result: this.state.result
                }
              }}
              role="button"
            >
              {doctor.name}
            </Link>
          </h4>
          <p class="card-text styledescription">
            <span> Location:{doctor.area} </span>
          </p>
          <br />
        </div>
      );
    });

    return (
      <div className="coverpic">
        <Navbar />
        <form onSubmit={this.handleSearch} class="form-inline">
          <input
            type="text"
            class="form-control mb-2 mr-sm-2  input-textbox "
            id="area"
            name="area"
            onChange={this.onChange}
            placeholder="Location"
            autoFocus
          />

          <div class="input-group mb-2 mr-sm-2">
            <input
              type="text"
              class="form-control"
              id="speciality"
              name="speciality"
              placeholder="Enter Speciality"
              onChange={this.onChange}
            />
          </div>

          <div class="input-group mb-2 mr-sm-2">
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary buttonstyle">
            Search
          </button>
        </form>

        <div className="container" style={{ margin: "10%" }}>
          {alldetails}
        </div>
        <div className="pages">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default SearchDoctors;
