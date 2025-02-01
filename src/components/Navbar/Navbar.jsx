import React, { useContext, useEffect, useState } from "react";
import style from "./navbar.module.scss";
import { MealsContext } from "../Context/MealsContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  let { allMealCategories, FilterByCategory, allMeals } = useContext(MealsContext);
  const [Categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  async function fetchCategories() {
    let res = await allMealCategories();
    console.log(res.data?.categories);
    setCategories(res.data?.categories);
  }

  async function fetchAllMeals() {
    let res = await allMeals();
    console.log(res.data?.meals);
    setActiveCategory("All");
  }

  async function filterMealsByCategory(categoryName) {
    let res = await FilterByCategory(categoryName);
    console.log(res.data?.meals);
    setActiveCategory(categoryName);
  }

  useEffect(() => {
    fetchAllMeals(); 
    fetchCategories();
  }, []);

  return (
    <nav className={style.nav}>
      <h1 className={style.h1}>Learn, Cook, Eat Your Food</h1>
      <ul className={style.ul}>
        <li>
          <Link
          to={`/`}
            className={`${style.catLink} ${activeCategory === "All" ? style.active : ""}`}
            onClick={fetchAllMeals}
          >
            All
          </Link>
        </li>
        {Categories?.map((category) => (
          <li key={category.idCategory}>
            <Link
              to={`/categories/${category.strCategory}`}
              className={`${style.catLink} ${activeCategory === category.strCategory ? style.active : ""}`}
              onClick={() => filterMealsByCategory(category.strCategory)}
            >
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}