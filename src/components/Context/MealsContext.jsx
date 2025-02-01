import axios from "axios";
import { createContext } from "react";

export let MealsContext = createContext();

export default function MealsContextProvider(props) {
  function allMealCategories() {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res)
      .catch((err) => err);
  }
  function allMeals() {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res)
      .catch((err) => err);
  }
  function FilterByCategory(categoryName) {
    return axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      )
      .then((res) => res)
      .catch((err) => err);
  }
  function mealDetails(mealId) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res)
      .catch((err) => err);
  }

  return (
    <MealsContext.Provider
      value={{ allMealCategories, FilterByCategory, allMeals , mealDetails}}
    >
      {props.children}
    </MealsContext.Provider>
  );
}