import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setSelectedProduct,
  removeSelectedProductReducer,
} from "../redux/actions/productActions";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.selectedProduct);

  useEffect(() => {
    const fetchSelectedProduct = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((error) => console.log(error));
      dispatch(setSelectedProduct(response.data));
    };

    if (id && id !== "") fetchSelectedProduct();

    return () => {
      dispatch(removeSelectedProductReducer());
    };
  }, [id, dispatch]);

  if (!selectedProduct) return <div>Loading...</div>;

  const { title, price, category, image, description } = selectedProduct;
  return (
    <div className="ui grid container">
      <div className="ui placehonder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className=" middle aligned row">
            <div className="column lp">
              <img src={image} alt={title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a href="" className="ui teal tag label">
                  ${price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex={0}>
                <div className="hidden content">
                  <i className="shop   icon"></i>
                </div>
                <div className="visible content"> Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
