import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss"

const Error = () => {
  return (
    <div className="error_container">
      <h1>Invalid Link</h1>
      <Link to="/">Click to return</Link>
    </div>
  );
};

export default Error;
