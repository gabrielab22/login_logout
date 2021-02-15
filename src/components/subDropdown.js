import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { navigate } from "@reach/router";

const SubDropdown = ({
  cars,
  catType,
  subCatType,
  setSubCatType,
  setDetails,
}) => (
  <DropdownButton
    title={subCatType.length ? subCatType : "Types"}
    disabled={!catType.length}
  >
    {Object.keys(cars[catType] || {}).map((cat, index) => (
      <Dropdown.Item
        key={index}
        onClick={() => setSubCatType(cat)}
        className="w-10 d-flex justify-content-between"
      >
        {cat}
        <b
          onClick={() => {
            setDetails(cars[catType][cat]);
            navigate("details");
          }}
        >
          detalji
        </b>
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default SubDropdown;
