import React from "react";

const Select = ({ id, name, value, onChange, options }) => (
    <select id={id} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

export default Select;
