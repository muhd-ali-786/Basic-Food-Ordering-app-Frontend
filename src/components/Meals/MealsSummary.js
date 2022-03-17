import React from "react";
import css from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={css.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our bread selection of available Meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
