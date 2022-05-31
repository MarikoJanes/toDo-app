import React from 'react';
import Quote from './Quote';

function ShowDate() {
    
  const current = new Date();
  const date = `${current.toLocaleString("en-US", { month: "short" })} ${current.getDate()}`;
  
  return (
    <div>
        <h1>{date}</h1>
        <Quote />
    </div>
  )
}

export default ShowDate