import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import ProductItem from "../utils/productItem/ProductItem";
import Filters from "./Filters";
import LoadMore from "./LoadMore";
import Footer from "../footer/footer";

function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [isCheck, setIsCheck] = useState(false);
  const [callback, setCallback] = state.productsAPI.callback;

  const deleteProduct = async (id, public_id) => {
    try {
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: { Authorization: token },
      });
      await destroyImg;
      await deleteProduct;
      setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const deleteAll = () => {
    products.forEach((product) => {
      if (product.checked) deleteProduct(product._id, product.images.public_id);
    });
  };

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  return (
    <>
      <div className="container-home" id="News-content">
        <div>
          <h1 id="home-title">BRL News</h1>

          <p id="sub-title">
            Socially intelligent robot helps autistic Somerset pupils
          </p>
        </div>
      </div>

      <Filters />

      {isAdmin && (
        <div className="delete-all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete ALL</button>
        </div>
      )}
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              deleteProduct={deleteProduct}
              handleCheck={handleCheck}
            />
          );
        })}
      </div>
      <LoadMore />

      <div>
        <div className="event-title">
          <h2>Our Events</h2>
        </div>
        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=860&h=550&dpr=1"
                  alt=""
                />
              </figure>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://th.bing.com/th/id/R.7f82bfaf066be9c6d5861435b1580ff4?rik=g%2btbZzkI7nbBfQ&pid=ImgRaw&r=0"
                  alt=""
                />
              </figure>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://th.bing.com/th/id/R.2bdafa955e591240037f60eb23052aed?rik=O6KcgABRiXLEeA&pid=ImgRaw&r=0"
                  alt=""
                />
              </figure>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://th.bing.com/th/id/OIP.99tWPkB1D7EKxwxveYZeRgHaE7?pid=ImgDet&rs=1"
                  alt=""
                />
              </figure>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://th.bing.com/th/id/OIP.YznZRzoaqBaytuttwDAeuAHaE8?pid=ImgDet&w=1296&h=864&rs=1"
                  alt=""
                />
              </figure>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://th.bing.com/th/id/OIP.tAvR0gUHikDPStsDHvpZaAHaE8?pid=ImgDet&rs=1"
                  alt=""
                />
              </figure>
            </div>
          </article>
        </section>
      </div>

      <div className="container-home" id="Event-content"></div>

      <section class="about">
        <div className="study-title">
          <h2>Study at BRL</h2>
        </div>
        <div class="home-row">
          <div class="about-middle">
            <h2>PhD in Robotics</h2>
            <br />
            <p>
              The PHD in Robotics is designed to provide you with a wide
              understanding of advanced robotics and automation systems with
              broad applications. It is sufficiently general to give you an
              excellent background for a professional career in the robotics
              sector whilst also providing the specialism necessary for a career
              as a researcher.
            </p>

            <p>
              The programme is jointly delivered by the University of Bristol
              and the University of the West of England, and draws on the
              combined expertise of both universities and Bristol Robotics
              Laboratory - a world-leading facility for robotics research.
            </p>
          </div>

          <div class="about-left">
            <img
              className="image2-home"
              src="https://lirp.cdn-website.com/4eb3016f/dms3rep/multi/opt/BRL%2Bat%2Bnight-325w.jpg"
              alt=""
            />
          </div>
          <div class="about-right">
            <h2>MSc in Robotics</h2>
            <br />
            <p>
              The MSC in Robotics is designed to provide you with a wide
              understanding of advanced robotics and automation systems with
              broad applications. It is sufficiently general to give you an
              excellent background for a professional career in the robotics
              sector whilst also providing the specialism necessary for a career
              as a researcher.
            </p>
            <p>
              The programme is jointly delivered by the University of Bristol
              and the University of the West of England, and draws on the
              combined expertise of both universities and Bristol Robotics
              Laboratory - a world-leading facility for robotics research.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Products;
