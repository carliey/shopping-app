import React from "react";
import { useSelector } from "react-redux";

function Product() {
  const products = useSelector((state) => state.allProducts);
  console.log(products[0]);
  const { id, title, category } = products.products[0];

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
