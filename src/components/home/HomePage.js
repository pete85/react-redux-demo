import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Demo React Homepage</h1>
    <p>React, Redux and React Router.</p>
    <link to="about" className="btn btn-primary btn-lg">
      Learn more
    </link>
  </div>
);

export default HomePage;