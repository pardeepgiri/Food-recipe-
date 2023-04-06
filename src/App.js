import React, { useEffect, useState } from 'react';
import './component/style.css';
import Recipecart from './component/Recipecart';

const App = () => {
  const[search,setSearch]=useState("");
  const[item,setItem]=useState("")
  const[url,setUrl]=useState(`https://www.themealdb.com/api/json/v1/1/search.php?s=soup`);

  useEffect(()=>{
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
      console.log(data);
      setItem(data.meals);

    })
  },[url]);

  const urlvalfun=(evt)=>{
    setSearch("")
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
 
  return (
    <div className='main'>
      <div className="heading">
                <h1>Search Your Food Recipe</h1>
     </div>
      <div className="searchBox">
        <input type='text' className="search-bar" value={search} onChange={(e)=>setSearch(e.target.value)} ></input>
        <button onClick={urlvalfun} className='search-btn'> Search</button>
      </div>
      <div className="container">
        
        {item ? item.map(recipe => (
          <Recipecart
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results Found."}
      </div>

    </div>
  )
}

export default App;