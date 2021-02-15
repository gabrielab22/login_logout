import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const MainDropdown = ({ cars, catType, setCatType }) => (
  <DropdownButton title={catType.length ? catType : "Cars"}>
    {Object.keys(cars).map((cat, index) => (
      <Dropdown.Item key={index} onClick={() => setCatType(cat)}>
        {cat}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default MainDropdown;
