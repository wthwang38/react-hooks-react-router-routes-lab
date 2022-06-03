import React from "react";
import { movies } from "../data";

function Movies() {
  const render = (item) =>{
    return (
      <div key={item.title}>
        {item.title}
        {item.time}
        <ul>{item.genres.map((g)=>(<li key={g.toString()}>{g}</li>))}</ul>
      </div>
    )
  }
  const renderMovies = movies.map((movie)=> (render(movie))
  )
  return <div>
  <h1>Movies Page</h1>  
  {renderMovies}
  </div>;
}

export default Movies;
