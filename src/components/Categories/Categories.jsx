import React, { useContext, useEffect, useState } from "react";
import style from "./categories.module.scss";
import { MealsContext } from "../Context/MealsContext";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Categories() {
  let { FilterByCategory, allMeals, mealDetails } = useContext(MealsContext);
  const [meals, setMeals] = useState([]);
  const { categoryName } = useParams();

  async function filterMeals(categoryName) {
    let res = await FilterByCategory(categoryName);
    console.log(res.data?.meals);
    setMeals(res.data?.meals);
  }

  async function fetchAllMeals() {
    let res = await allMeals();
    console.log(res.data?.meals);
    setMeals(res.data?.meals);
  }
  async function fetchMealsDetails(id) {
    let res = await mealDetails(id);
    console.log(res.data.meals);
  }

  useEffect(() => {
    fetchAllMeals();
    if (categoryName) {
      filterMeals(categoryName);
    } else {
      fetchAllMeals();
    }
  }, [categoryName]);

  return (
    <>
      <Navbar/>
      <div className={style.container}>
        <div className={style.meals}>
          {meals?.map((meal) => (
            <div key={meal.idMeal} className={style.meal}>
              <div className="image">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <h3>{meal.strMeal.split(" ").slice(0, 2).join(" ")}</h3>
              {meal.strArea ? (
                <h5>
                  <i class="fa-solid fa-earth-europe"></i>
                  {meal.strArea}
                </h5>
              ) : null}
              <Link
                to={`/mealdetails/${meal.idMeal}`}
                onClick={() => fetchMealsDetails(meal.idMeal)}
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
