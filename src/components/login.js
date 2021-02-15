import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../cart";
import { navigate } from "@reach/router";

const Cart = () => {
  const { login } = useContext(CartContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePass = (event) => {
    setPass(event.target.value);
  };

  const handleLogin = () => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        login(data.token);
        console.log("res", data);
      });
  };

  return (
    <div className="m-3 p-3 col d-flex justify-content-center flex-column border border-4 border-primary rounded">
      <input placeholder="email" value={email} onChange={handleOnChangeEmail} />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={handleOnChangePass}
      />

      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default Cart;
