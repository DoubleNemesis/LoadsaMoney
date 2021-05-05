import React, { useState, useEffect } from "react";
import DisplayPages from "./DisplayPages.js"

function DataFetcherManager() {

  const productsURL = "https://fakestoreapi.com/products/";
  const [products, setProducts] = useState("")
  const [wishListCost, setWishListCost] = useState(0)

  useEffect(() => {
    fetch(productsURL)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          data[item]["selected"] = false;
        }
        setProducts(data)
      })
  },[])
  
  useEffect(()=>{
    let tally = 0;
    for (let item in products) {
      if (products[item].selected === true){
        tally = tally + products[item].price
      }
    }
    setWishListCost(tally)
  },[products])
  
  

// console.log(products[0])

function toggleSelected(id) {
  let target = {...products}
  for (let item in products) {
    if (products[item].id === id) {
      target[item].selected = !target[item].selected
    }
    setProducts(target)
  }
}

  return (
    <DisplayPages 
      products={products}
      toggleSelected={toggleSelected}
      wishListCost={wishListCost}
    />
  )
}

export default DataFetcherManager;
