import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchDoctors from "./SearchDoctors/SearchDoctors";
import Fulldetails from "./Fulldetails/Fulldetails";
class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SearchDoctors} />
        <Route path="/fulldetails" component={Fulldetails} />
      </div>
    );
  }
}

export default Main;
