import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Product() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products?.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div key={id} className="column">
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta category">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default Product;
