import { useParams } from "react-router-dom";
import stocks from "../data.jsx";
import { useEffect, useState } from "react";
import { useStockContext } from "./StockProvider";

export default function Stock() {
  const { myStock, setMyStock } = useStockContext();
  const { symbol } = useParams();
  const [stock, setStock] = useState([]);

  async function getStock() {
    let key = import.meta.env.VITE_API_KEY;
    let api = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${key}`;
    const response = await fetch(api);
    const data = await response.json();
    setStock(data);
    console.log(data);
  }

  function addStock(newStock) {
    let arrStock = [...myStock, newStock];
    setMyStock(arrStock);
    console.log(arrStock);
  }
  useEffect(() => {
    console.log(myStock);
  }, [myStock]);
  console.log(symbol);

  return (
    <div className="stockInfo">
      {stocks.map((stock) => {
        if (stock.symbol === symbol) {
          return (
            <div key={symbol}>
              <h1>{stock.name}</h1>
              <h2>{stock.symbol}</h2>
              <p>Last price: {stock.lastPrice}</p>
              <p>Change: {stock.change.toFixed(2)}</p>
              <p>High: {stock.high}</p>
              <p>Low: {stock.low}</p>
              <p>Open: {stock.open}</p>
              <button className="button" onClick={() => addStock(stock)}>
                Follow
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
