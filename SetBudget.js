import React from "react";

function SetBudget(props) {
  return (
    <div className="setBudget">
    <label>Set your budget</label>
    <input
    type="number"
    value={props.budget}
    onChange={props.handleChange}
    />
    <p>£{props.budget}</p>
    </div>
  )
}

export default SetBudget;
