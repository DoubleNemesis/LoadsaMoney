import React, { useState } from "react";
import DisplayProductList from "./DisplayProductList"
import DisplayWishList from "./DisplayWishList"
import Budget from "./Budget"
import SetBudget from "./SetBudget"

function DisplayPages(props) {
  const [budget, setBudget] = useState(0)
  const [pageToDisplay, setPageToDisplay] = useState('availableProducts')
  
  function handleChange(e) {
    setBudget(e.target.value)
  }
  
  function handleClick(e){
    setPageToDisplay(e.target.id)
  }


  return (
    <div className="main">
    <div className="infoArea">
    <div className="buttons">
    <button onClick={handleClick} id="availableProducts" className="button">Products</button>
    <button onClick={handleClick} id="wishes" className="button">Wish List</button>
    <button onClick={handleClick} id="setBudget" className="button">Set Budget</button>
    </div>
      <Budget wishListCost={props.wishListCost} budget={budget}  />
      </div>
        {pageToDisplay === "availableProducts" ? (
          <DisplayProductList
            products={props.products}
            toggleSelected={props.toggleSelected}
          />
        ) : pageToDisplay === "wishes" ? (
          <DisplayWishList
            products={props.products}
            toggleSelected={props.toggleSelected}
          />
        ) : (
          <SetBudget handleChange={handleChange} budget={budget} />
        )}
    </div>
  )
}

export default DisplayPages;
