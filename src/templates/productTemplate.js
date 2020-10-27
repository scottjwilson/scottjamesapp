import React, { useEffect, useContext } from "react";
import Layout from "../components/layout";
import StoreContext from "../context/StoreContext";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;

  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext);

  const handleAddToCart = () => {
    addVariantToCart(product.shopifyId);
  };

  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <br />
      <button type="submit" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </Layout>
  );
};
export default ProductTemplate;
