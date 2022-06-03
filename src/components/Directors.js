import React from "react";
import { directors } from "../data";

function Directors() {
  const render = (item)=>{
    return (
      <div key={item.name}>{item.name}
      <ul>{item.movies.map((m)=><li key={m.toString()}>{m}</li>)}</ul>
      </div>
    )
  }
  const renderD = directors.map((item)=>render(item))
  return<div>
    <h1>Directors Page</h1>
    {renderD}</div>;
}
//This component should render the text Directors Page in an <h1>, and make a new <div> for each director. The <div> should contain the director's name and a <ul> with a list of their movies.
export default Directors;
