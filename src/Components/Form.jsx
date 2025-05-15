import React from "react";
import "../Styles/form.css";

const Form = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="input-wrapper">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default Form;
