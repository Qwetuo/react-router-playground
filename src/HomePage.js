import React from "react";

const HomePage = ({ match }) => {
  const id = match.params.id;
  return (
    <div>
      <h1>This is your home page</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default HomePage;
