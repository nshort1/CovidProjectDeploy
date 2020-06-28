import React, { useState } from "react";
import ReactDOM from "react-dom";



const Usa_daily = async (url) =>{
  let vals = [];

  const response = await fetch(url);
  const data = await response.json();
  for(let i =0; i<data.length;i++)
  {
    vals[i] = data[i].Confirmed;
  }

  return vals;
}

export default Usa_daily;
