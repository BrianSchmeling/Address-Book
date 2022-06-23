import React from "react";

const CreateAddress = () => {
  return (
    <div>
      <form action="http://localhost:4000/new" method="POST">
        <input type="text" placeholder="first name" name="firstName" />
        <input type="text" placeholder="last name" name="lastName" />
        <input type="text" placeholder="company name" name="companyName" />
        <input type="text" placeholder="street" name="street" />
        <input type="text" placeholder="city" name="city" />
        <input type="text" placeholder="state" name="state" />
        <input type="text" placeholder="zip code" name="zipCode" />
        <input type="text" placeholder="home phone" name="home" />
        <input type="text" placeholder="cell phone" name="cell" />
        <input type="text" placeholder="work phone" name="work" />
        <input type="text" placeholder="fax number" name="fax" />
        <input type="text" placeholder="email address" name="emailAddress" />
        <button id="muButton" type="submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default CreateAddress;
