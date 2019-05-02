import React, { Component } from "react";
import Navbar from "../common/Navbar/Navbar";
import { Redirect } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Fulldetails/FullDetails.css";

class Fulldetails extends Component {
  constructor(props) {
    super(props);

    const {
      area,
      speciality,
      name,
      ratings,
      result
    } = this.props.location.state;

    this.state = {
      area: area,
      speciality: speciality,
      name: name,
      ratings: ratings,
      result: {}
    };
    this.state.result = result.filter(
      doc =>
        doc.speciality === this.state.speciality && doc.name !== this.state.name
    );
  }

  render() {
    console.log(this.state);
    let y = this.state.result;

    let x = y.sort(function(a, b) {
      console.log(a, b);
      return parseInt(a.ratings) - parseInt(b.ratings);
    });
    console.log(x);
    console.log(y);

    let alldetails = this.state.result.map(doctor => {
      return (
        <div class="media-body cardstyle">
          <h4 class="card-title p-2 mt-2 ">
            <Link
              to={{
                pathname: "/",
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
      //   return (
      //     <div class="media-body " style={{ border: "1px solid" }}>
      //       <h4 class="card-title p-2 mt-2 ">
      //         <Link
      //           to={{
      //             pathname: "/fulldetails",
      //             state: {
      //               area: doctor.area,
      //               speciality: doctor.speciality,
      //               name: doctor.name,
      //               ratings: doctor.ratings,
      //               result: this.state.result
      //             }
      //           }}
      //           role="button"
      //         >
      //           {doctor.name}
      //         </Link>
      //       </h4>
      //       <p class="card-text styledescription">
      //         <span> Doctor Area:{doctor.area} </span>
      //         <span> Doctor speciality: {doctor.speciality} </span>
      //         <span> Doctor Name: {doctor.name} </span>
      //         <span> Doctor Rating: {doctor.ratings} </span>
      //       </p>
      //       <br />
      //     </div>
      //   );
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

              <p className="heading"> DETAILS FOR {this.state.name} </p>
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
