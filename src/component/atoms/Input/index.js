import React from "react";
import "./input.scss";
const Input = ({ label, ...res }) => {
  return (
    <div>
      <p className="label">{label} </p>
      <input className="input" {...res} />
    </div>
  );
};

export default Input;
