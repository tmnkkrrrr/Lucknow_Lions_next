import React from "react";
import "./ChoiceChip.css";

export default function ChoiceChip ({ label, selected }) {
  return (
    <div className={`choice-chip selected`}>{label}</div>
  );
};
