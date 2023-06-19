import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import DetailProduct from "./detailProduct/DetailProduct";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Products from "./products/Products";
import NotFound from "./utils/not_found/NotFound";
import { GlobalState } from "../../GlobalState";
import Categories from "./categories/Categories";
import CreateProduct from "./createProduct/CreateProduct";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";

function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Products} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/detail/:id" exact component={DetailProduct} />
      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route
        path="/register"
        exact
        component={isLogged ? NotFound : Register}
      />
      <Route
        path="/create_product"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />

      <Route
        path="/edit_product/:id"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />

      <Route
        path="/category"
        exact
        component={isAdmin ? Categories : NotFound}
      />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default Pages;
