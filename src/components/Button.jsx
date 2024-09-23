import React from "react";
// import { Button } from "react-bootstrap";
import "./Button.css";

export const ButtonComponent = ({ text, onClick, color, customClass }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button-outline ${customClass || ""}`}
      style={{
        backgroundColor: color.background,
        color: color.text,
        border: color.border,
      }}
    >
      {text}
    </button>
  );
};
