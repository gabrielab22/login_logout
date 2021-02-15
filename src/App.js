import React, { useState, useEffect } from "react";
import { CartContext, useCart } from "./cart";
import { Router, navigate } from "@reach/router";

import Details from "./components/details";
import Login from "./components/login";
import Cart from "./components/cart";
import Home from "./components/home";

const App = () => {
  const [catType, setCatType] = useState("");
  const [subCatType, setSubCatType] = useState("");
  const [details, setDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState({});
  const cart = useCart();

  useEffect(() => {
    if (cart.token) {
      fetch("http://localhost:8080/carsDetails", {
        method: "GET",
        headers: {
          token: cart.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          navigate("/");
        });
    } else {
      navigate("/login");
    }
  }, [cart.token]);

  useEffect(() => {
    if (cars[catType] && cars[catType] !== subCatType) {
      setSubCatType("");
      setDetails(false);
    }
  }, [catType]);

  return (
    <div className="App">
      <header className="App-header">
        <CartContext.Provider value={cart}>
          <Router default="/">
            <Login path="login" />
            <Home
              path="/"
              cars={cars}
              catType={catType}
              setCatType={setCatType}
              subCatType={subCatType}
              setSubCatType={setSubCatType}
              setDetails={setDetails}
            />
            <Details
              path="details"
              catType={catType}
              subCatType={subCatType}
              details={details}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <Cart path="cart" />
          </Router>
        </CartContext.Provider>
      </header>
    </div>
  );
};

export default App;
