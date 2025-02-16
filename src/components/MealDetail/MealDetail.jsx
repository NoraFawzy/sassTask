import style from "./mealDetail.module.scss";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MealsContext } from "../Context/MealsContext";

export default function MealDetail() {
  const { idMeal } = useParams();
  const { mealDetails } = useContext(MealsContext);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMealDetails(mealId) {
      try {
        let res = await mealDetails(mealId);
        console.log(res);
        if (res.data && res.data.meals) {
          setMeal(res.data.meals[0]);
        } else {
          console.error("Invalid meal ID");
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    fetchMealDetails(idMeal);
  }, [idMeal, mealDetails]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div className={style.mealDetail}>
      <div className={style.mainContent}>
        <h1 className={style.title}>{meal.strMeal}</h1>
        <div className={style.contentGrid}>
          <div className={style.imageContainer}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <ul>
              <li>
                <a href={meal.strYoutube} className="youtube">
                  Youtube
                </a>
              </li>
              <li className="source">
                <a href={meal.strSource} className="source">
                  Source
                </a>
              </li>
            </ul>
          </div>
          <p className={style.instructions}>{meal.strInstructions}</p>
        </div>
      </div>
      <div className={style.sidebar}>
        <div className={style.ingredients}>
          <h3>Ingredients</h3>
          {[...Array(20).keys()].map((i) => {
            const ingredient = meal[`strIngredient${i + 1}`];
            const measure = meal[`strMeasure${i + 1}`];
            return (
              ingredient && (
                <div key={i} className={style.ingredient}>
                  <span>{ingredient}</span>
                  <span>{measure}</span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
