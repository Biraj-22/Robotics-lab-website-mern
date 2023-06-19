import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Footer from "../footer/footer";
function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [detailProduct, setDetailProduct] = useState([]);
  //const addCart = state.userAPI.addCart;

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="detail">
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.title}</h2>
          </div>
          <p>{detailProduct.description}</p>

          <p>{detailProduct.content}</p>
        </div>
        <Link id="back-link" to="/blog">
          X
        </Link>
      </div>

      <div className="related-item">
        <div className="related-product">
          <h2>RELATED News</h2>
        </div>
        <div className="products ">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailProduct;
