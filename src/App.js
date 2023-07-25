import React, { useEffect, useState } from "react";
import "./component/style.css";
import Recipecart from "./component/Recipecart";
import Cart from "./component/Cart";

const App = () => {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=soup"
  );
  const [cart, setCart] = useState([]);
  const [cartshow, setCartShow] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setItem(data.meals);
      });
  }, [url]);

  const urlvalfun = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  const addToCart = (recipe) => {
    setCart((prevCart) => [...prevCart, recipe]);
  };

  const removeFromCart = (recipeId) => {
    setCart((prevCart) => prevCart.filter((recipe) => recipe.idMeal !== recipeId));
  };

  const toggleCart = () => {
    setCartShow(!cartshow);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>FOODHUB</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search here..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={urlvalfun} className="searchbtn">
            Search
          </button>
        </div>
        <div className="cart">
          <div onClick={toggleCart}>
            Cart<sup className="cartcount">{cart.length}</sup>
          </div>
        </div>
      </header>
      {
        cartshow && (
         <div className="cartapp">
           <Cart cart={cart} removeFromCart={removeFromCart} cartshow={cartshow} />
         </div>
        )
      }

      <div className="container">
        {item ? (
          item.map((recipe) => (
            <Recipecart
              key={recipe.idMeal}
              recipe={recipe}
              addToCart={addToCart}
              isInCart={cart.some((item) => item.idMeal === recipe.idMeal)}
            />
          ))
        ) : (
          <h1>No Result found</h1>
        )}
      </div>
    </div>
  );
};

export default App;