import React from "react";

const Recipecart = ({ recipe, addToCart, removeFromCart, isInCart }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;


  const handleFavoriteClick = () => {
    addToCart(recipe);
  }
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/" + idMeal}>Instructions</a>
        <button onClick={handleFavoriteClick} className="addbtn">add to cart</button>
      </div>
    </div>
  );
};

export default Recipecart;