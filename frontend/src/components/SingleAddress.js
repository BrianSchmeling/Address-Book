import React from "react";
import { useParams } from "react-router";

const SingleAddress = ({ addresses }) => {
  const firstName = useParams().firstName;
  const lastName = useParams().lastName;
  const putUrl = `http://localhost:4000/${firstName}/${lastName}?_method=PUT`;
  const deleteUrl = `http://localhost:4000/${firstName}/${lastName}?_method=DELETE`;
  //   console.log(firstName);
  //   console.log(lastName);
  const person = addresses.map((address) => {
    if (firstName == address.firstName && lastName == address.lastName) {
      return (
        <div>
          <div>
            <h1>
              {address.firstName} {address.lastName}
            </h1>
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
          <div>
            <form action={putUrl} method="POST">
              <input type="hidden" name="_method" value="put" />
              <input type="text" placeholder="first name" name="firstName" />
              <input type="text" placeholder="last name" name="lastName" />
              <input
                type="text"
                placeholder="company name"
                name="companyName"
              />
              <input type="text" placeholder="street" name="street" />
              <input type="text" placeholder="city" name="city" />
              <input type="text" placeholder="state" name="state" />
              <input type="text" placeholder="zip code" name="zipCode" />
              <input type="text" placeholder="home phone" name="home" />
              <input type="text" placeholder="cell phone" name="cell" />
              <input type="text" placeholder="work phone" name="work" />
              <input type="text" placeholder="fax number" name="fax" />
              <input
                type="text"
                placeholder="email address"
                name="emailAddress"
              />
              <button id="muButton" type="submit">
                Submit!
              </button>
            </form>
          </div>
          <div>
            <form action={deleteUrl} method="POST">
              <input type="hidden" name="_method" value="delete" />
              <button type="submit">Delete!</button>
            </form>
          </div>
        </div>
      );
    }
  });
  return <div>{person}</div>;
};

export default SingleAddress;
