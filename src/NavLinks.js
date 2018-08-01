import React from "react";
import { Link, Redirect } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <Redirect to={{
          pathname: '/twitter'
      }}>Redirect </Redirect>
      <Link to="/events">Home Page </Link>
      <Link to="/events/hello%20world">Hello World Page </Link>
      <Link to="/tacos">Tacos Feed </Link>
      <Link to="/twitter">Twitter Feed </Link>
    </div>
  );
};

export default NavLinks;
