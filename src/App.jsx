import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MealsContextProvider from "./components/Context/MealsContext";
import Categories from "./components/Categories/Categories";
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  let route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Categories/> 
        },
        {
          path: "categories/:categoryName",
          element: <Categories />, 
        },
        {
          path: "/mealdetails/:idMeal", 
          element: <MealDetail/>, 
        },
      ],
    },
  ]);
  return (
    <>
      <MealsContextProvider>
        <RouterProvider router={route} />
      </MealsContextProvider>
    </>
  );
}

export default App;
