import React, { Component } from "react";
import Navbar from "../common/Navbar/Navbar";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Fulldetails/FullDetails.css";

class Fulldetails extends Component {
  constructor(props) {
    super(props);

    const { area, speciality, name, ratings } = this.props.location.state;

    this.state = {
      area: area,
      speciality: speciality,
      name: name,
      ratings: ratings,
      clicked: false,
      result: []
    };
  }

  handleSimilar(doctor, e) {
    console.log("Parameter", doctor);
    console.log("Event", e);
    this.setState({
      area: doctor.area,
      speciality: doctor.speciality,
      name: doctor.name,
      ratings: doctor.ratings
    });
  }
  // http://54.193.24.133:5000
  componentDidMount() {
    axios
      .get(`http://54.193.24.133:5000/doctor/${this.state.speciality}`)
      .then(response => {
        const result = response.data;
        const finalresult = result.filter(
          doc =>
            doc.speciality === this.state.speciality &&
            doc.name !== this.state.name
        );
        this.setState({
          result: finalresult
        });
      });
  }

  render() {
    let alldetails = this.state.result.map(doctor => {
      return (
        <div class="media-body cardstyle">
          <h4 class="card-title p-2 mt-2 ">
            <button
              class="btn btn-link"
              onClick={e => this.handleSimilar(doctor, e)}
            >
              {doctor.name}
            </button>
          </h4>
          <p class="card-text styledescription">
            <span> Location:{doctor.area} </span>
          </p>
          <br />
        </div>
      );
    });
    console.log(this.state.result);
    return (
      <div className="coverpic">
        <Navbar />
        <div className="div">
          <div className="container">
            {/* left */}
            <div className="detail">
              <br />
              <br />

              <p className="heading"> DETAILS FOR DR. {this.state.name} </p>
              <table cellpadding="20px">
                <tr>
                  <td className="heading">LOCATION</td>
                  <td className="heading">SPECIALITY</td>
                  <td className="heading">RATING</td>
                  <td className="heading">NAME</td>
                </tr>
                <tr>
                  <td> {this.state.area}</td>
                  <td>{this.state.speciality}</td>
                  <td> {this.state.ratings}</td>
                  <td>{this.state.name}</td>
                </tr>
              </table>

              <br />
            </div>

            {/* right */}
            <div className="sidediv">
              <br />
              <span> Similar {this.state.speciality} doctors </span>
              {alldetails}

              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fulldetails;
