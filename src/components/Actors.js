import React from "react";
import { actors } from "../data";

function Actors() {
  const render = (item)=>{
    return (
      <div key={item.name}>{item.name}
      <ul>{item.movies.map((m)=><li key={m.toString()}>{m}</li>)}</ul>
      </div>
    )
  }
  const renderA = actors.map((a)=>render(a))
  return <div>
    <h1>Actors Page</h1>
    {renderA}</div>;
}
//This component should render the text Actors Page in an <h1>, and make a new <div> for each actor. The <div> should contain the actor's name and a <ul> with a list of their movies.
export default Actors;
