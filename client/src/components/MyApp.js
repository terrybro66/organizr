import React from "react";
import { Link } from "react-router-dom";

const MyApp = ({ hero }) => {
  return (
    <div>
      <h1>
        <Link to={`./${hero.speciality}`}>{hero.name}</Link>
      </h1>
    </div>
  );
};

export default MyApp;
