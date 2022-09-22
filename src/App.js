//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
import { useState } from "react";

import quotesData from "./data/quotes.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const randomQuote =
    quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];


   const randomColor =
       colors[Math.floor(Math.random() * colors.length)];


  const [quote, setQuote] = useState(randomQuote);
  const [bground, setBground] = useState(randomColor);


  const handleQuoteChange = () => {
    setQuote(
      quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)],
    );
    setBground(
        colors[Math.floor(Math.random() * colors.length)]
      );
  };

  console.log(quote)
  return (
    <div
      style={{
        backgroundColor: bground,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         transition: "all 1s ease",
         WebkitTransition: "all 1s ease",
         MozTransition: "all 1s ease"

      }}
      className="App"
    >
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous"
                />
            </div>
      <div
        style={{
          position:"relative",
          width: "40%",
          borderStyle: "solid white",
          borderRadius: "5px",
          height: "40%",
          display: "flex",
          backgroundColor: "white",
          flexDirection: "column",
        }}
        className="quotes-container"
      >
            <div style={{
                    position:"relative",
                    height: "70%",
                    padding: "4rem ",
                    color:bground,
                    fontSize:"2rem",
                    transition: "all 1s ease",
                    WebkitTransition: "all 1s ease",
                    MozTransition: "all 1s ease"
            }} className="quotes">

          "" {quote.quote}

        </div>


          <div className="quotes"  style={{
              position:"relative",
              display: "flex",
              justifyContent: "center",
              color: bground,
              transition: "all 1s ease",
              WebkitTransition: "all 1s ease",
              MozTransition: "all 1s ease"
          }}>
              {quote.author}
          </div>
            <div
              style={{
                height: "30%",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
              className="actions"
            >
          <div
            className="links"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding:"1rem"}}
          >
            <a className="btn" style={{ marginRight: "1rem", color:"white", backgroundColor: bground }}>instagram</a>
            <a className="btn" style={{ marginRight: "1rem", color:"white", backgroundColor: bground }}>whatsapp</a>
          </div>
          <button className="btn" style={{
              backgroundColor: bground,
              color: "white",
              padding: "1rem",
              transition: "all 1s ease",
              WebkitTransition: "all 1s ease",
              MozTransition: "all 1s ease"
          }} onClick={handleQuoteChange}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
