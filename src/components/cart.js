import React, { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../cart";
import { navigate } from "@reach/router";

const Cart = () => {
  const { cart, setCurrentCart } = useContext(CartContext);

  const addToCart = (currentCar) =>
    setCurrentCart(
      cart.map((car) =>
        JSON.stringify(car) === JSON.stringify(currentCar)
          ? { ...car, count: car.count + 1 }
          : car
      )
    );

  const removeFromCart = (currentCar) =>
    setCurrentCart(
      currentCar.count > 1
        ? cart.map((car) =>
            JSON.stringify(car) === JSON.stringify(currentCar)
              ? { ...car, count: car.count - 1 }
              : car
          )
        : cart.filter(
            (car) => JSON.stringify(car) !== JSON.stringify(currentCar)
          )
    );

  console.log(cart);

  return (
    <div className="m-3 p-3 col d-flex justify-content-center flex-column border border-4 border-primary rounded">
      {cart.map((car, index) => {
        const brand = Object.keys(car).find((key) => key !== "count");
        const model = Object.keys(car[brand])[0];
        return (
          <div
            key={index}
            className="mb-3 p-3 col d-flex justify-content-center flex-column border border-4 border-primary rounded"
          >
            <code className="text-center">Kolicina: {car.count}</code>
            <code className="text-center">Marka: {brand}</code>
            <code className="text-center">Model: {model}</code>
            <code className="text-center">Boja: {car[brand][model].color}</code>
            <code className="text-center">
              Vrata: {car[brand][model].doors}
            </code>
            <div className="mb-3 p-3 row d-flex justify-content-between flex-row ">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => removeFromCart(car)}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => addToCart(car)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default Cart;
