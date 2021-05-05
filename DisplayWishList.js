import React from "react";
import Product from "./Product"

function DisplayWishList(props) {

  const wishArray = []

  for (let item in props.products) {
    if (props.products[item].selected === true) {
      wishArray.push(
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
  }





  return (
    <>
    <h1>Wish List</h1>
    <div className="mainInner">
    {wishArray.length > 0 
    ? wishArray 
    : 'You have not added any items to your wishlist yet!'
     }
    </div>
    </>
  )
}

export default DisplayWishList;
