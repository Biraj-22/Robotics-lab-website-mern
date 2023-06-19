import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  //const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const [category, setCategory] = state.productsAPI.category;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <span>Filter Your Blog: </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={search}
        placeholder="Search your idea"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default Filters;
