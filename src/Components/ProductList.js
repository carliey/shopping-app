import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";

function ProductList() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log(error));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui three column grid container ">
      <Product />
    </div>
  );
}

export default ProductList;
