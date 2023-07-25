import React from "react";

function Cart({ cart, removeFromCart, cartshow }) {
    return (
        <div className="cart-box">
            {cartshow && (
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((recipe) => (
                            <div key={recipe.idMeal} className="cart-item">
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                    className="favcard-image"
                                />
                                <h4>{recipe.strMeal}</h4>
                                <button onClick={() => removeFromCart(recipe.idMeal)} className="addbtn">
                                    Remove from cart
                                </button>
                                <a href={"https://www.themealdb.com/meal/" + recipe.idMeal}>Instructions</a>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    )
} export default Cart;