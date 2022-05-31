import React, { useState, useEffect } from 'react'

function Quote() {
    const [quote, setQuote] = useState({});
   
    let quoteContent = "";
    let quoteAuthor = "";

    useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            setQuote(data);
        })
    }, []);



    if (quote.content !== undefined) {
        quoteContent = Object.entries(quote.content).map(([key, val]) => {
            return (
                <i key={key}>{val}</i>
            )
         })
         quoteAuthor = Object.entries(quote.author).map(([key, val]) => {
            return (
                <i key={key}>{val}</i>
            )
         })


    } 


  
    

    

  return (
    <div>
       <p>"{quoteContent}"</p>
       <p> - {quoteAuthor}</p>
    </div>
  )
}

export default Quote