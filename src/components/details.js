import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../cart";
import { navigate } from "@reach/router";
import Modal from "./modal";

const Details = ({ catType, subCatType, details, showModal, setShowModal }) => {
  const { cart, setCurrentCart } = useContext(CartContext);

  const currentCar = { [catType]: { [subCatType]: details } };
  const [isFirst, setIsFirst] = useState(false);
  const addToCart = () => {
    const exists = cart.find(
      (car) =>
        JSON.stringify(car[catType]) === JSON.stringify(currentCar[catType])
    );

    setCurrentCart(
      !exists
        ? [...cart, { ...currentCar, count: 1 }]
        : cart.map((car) =>
            JSON.stringify(car[catType]) === JSON.stringify(currentCar[catType])
              ? { ...car, count: car.count + 1 }
              : car
          )
    );

    if (!exists) {
      setIsFirst(true);
    }
  };
  useEffect(() => {
    if (isFirst) {
      setShowModal(true);
    }
  }, [isFirst]);

  return details ? (
    <div className="m-3 p-3 justify-content-center">
      <Modal
        show={showModal}
        setShow={() => {
          setShowModal(false);
          setIsFirst(false);
        }}
      />
      <div className="mb-3 p-3 col d-flex justify-content-center flex-column border border-4 border-primary rounded">
        <code className="text-center">Marka: {catType}</code>
        <code className="text-center">Model: {subCatType}</code>
        <code className="text-center">Boja: {details.color}</code>
        <code className="text-center">Vrata: {details.doors}</code>
      </div>
      <div className="d-flex col justify-content-center flex-column text-center">
        <button type="button" className="btn btn-primary" onClick={addToCart}>
          Add to Cart
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("cart")}
        >
          Cart
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </div>
  ) : null;
};

export default Details;
