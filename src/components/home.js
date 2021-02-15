import React, { useContext } from "react";
import MainDropdown from "./mainDropdown";
import SubDropdown from "./subDropdown";
import { navigate } from "@reach/router";
import { CartContext } from "../cart";

const Home = ({
  cars,
  catType,
  setCatType,
  subCatType,
  setSubCatType,
  setDetails,
}) => {
  const context = useContext(CartContext);

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-content-center flex-wrap">
        <code>{`${catType.length ? catType + "/" : ""}${
          subCatType.length ? subCatType + "/" : ""
        }`}</code>
      </div>
      <MainDropdown cars={cars} catType={catType} setCatType={setCatType} />
      <SubDropdown
        cars={cars}
        catType={catType}
        subCatType={subCatType}
        setSubCatType={setSubCatType}
        setDetails={setDetails}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate("cart")}
      >
        Go To Cart
      </button>
      {context.token && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={context.logout}
        >
          logout
        </button>
      )}
    </>
  );
};

export default Home;
