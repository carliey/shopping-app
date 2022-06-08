import React from "react";
import Product from "./Product";

function ProductList() {
  return (
    <div className="ui grid container">
      <h1>all products</h1>
      <Product />
    </div>
  );
}

export default ProductList;
