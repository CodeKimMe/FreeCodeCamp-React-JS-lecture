import React from 'react'

function Product(props) {
  return (
    <div>
      <p>id: {props.product.id}</p>
      <h1>{props.product.name}</h1>
      <h2>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h2>
      <h3>{props.product.description}</h3>
    </div>
  )
}


export default Product;
