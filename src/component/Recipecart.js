import React from "react";
const Recipecart = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
           <div className="card-body">
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal}>Instructions</a>
            </div>
        </div>
    )
};

export default Recipecart;