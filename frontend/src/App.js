import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import SingleAddress from "./components/SingleAddress";
import CreateAddress from "./components/CreateAddress";

function App() {
  const apiURL = "http://localhost:4000/";
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(apiURL, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((results) => {
        setAddresses(results.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!loading) {
    console.log(addresses);
    return (
      <div className="App">
        <header>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home addresses={addresses} />} />
            <Route
              path="/:firstName/:lastName"
              element={<SingleAddress addresses={addresses} />}
            />
            <Route
              path="/new"
              element={<CreateAddress addresses={addresses} />}
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
