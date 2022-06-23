import React from "react";
import { Link } from "react-router-dom";

const Home = ({ addresses }) => {
  const people = addresses.map((address) => {
    return (
      <div>
        <Link to={`/${address.firstName}/${address.lastName}`}>
          <h1>
            {address.firstName} {address.lastName}
          </h1>
        </Link>
        <p>{address.companyName}</p>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
        <p>{address.home}</p>
        <p>{address.cell}</p>
        <p>{address.work}</p>
        <p>{address.fax}</p>
        <p>{address.emailAddress}</p>
      </div>
    );
  });
  return <div>{people}</div>;
};

export default Home;
