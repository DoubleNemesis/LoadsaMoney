import React from "react";

function Budget(props) {

  const overdrawn = props.budget - props.wishListCost < 0


  return (
    <div className="budget">
      <div>You have allocated £{props.wishListCost} of your £{props.budget} budget.</div>
      <div className={overdrawn ? "budgetRemaining red" : "budgetRemaining"}>
        £{(props.budget - props.wishListCost).toFixed(2)}
        {overdrawn ? ' ouch!' : ' remaining'}
      </div>
    </div>
  )
}

export default Budget;
