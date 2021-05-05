import React from "react";
import Product from "./Product";

function DisplayProductList(props) {
  const productsArray = []

  for (let item in props.products) {
    productsArray.push(
      <Product
        key={props.products[item].id}
        title={props.products[item].title}
        description={props.products[item].description}
        price={props.products[item].price}
        image={props.products[item].image}
        id={props.products[item].id}
        toggleSelected={props.toggleSelected}
        selected={props.products[item].selected}
      />
    )
  }

  return (
    <div>
    <h1>Available Products</h1>
    <div className="mainInner">
    {productsArray}
    </div>
    </div>
  )
}

export default DisplayProductList;
