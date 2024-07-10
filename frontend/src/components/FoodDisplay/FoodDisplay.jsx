import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category,canteen }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes For You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (
            (category === "All" || item.category === category) &&
            (canteen === "All" || item.canteen === canteen)
          ) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                canteen={item.canteen}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
