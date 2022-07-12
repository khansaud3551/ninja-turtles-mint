import React from "react";
import { Link } from "react-router-dom";

function ButtonPrimary({ text, linkTo }) {
  return (
    <Link to="/" className="btn-primary">
      <div>{text}</div>
    </Link>
  );
}

export default ButtonPrimary;
