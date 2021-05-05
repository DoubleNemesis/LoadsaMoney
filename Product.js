import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h4>{props.title}</h4>
      <img alt={props.title} src={props.image} />
      <p>
        {props.description}<span className="price"> £{props.price}</span>
        </p>
        <label> {!props.selected ? 'Add to Wishlist' : 'Remove from Wishlist' }
        <input 
        type="checkbox"
        onChange={()=>props.toggleSelected(props.id)}
        checked={props.selected}
        />
        </label>
    </div>
      )
    }
    
    export default Product;
