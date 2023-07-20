import { Link } from "react-router-dom";
import stocks from "../data.jsx";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <h1 className="h1">Most Active Stocks</h1>
      <div className="outerContainer">
        <div className="companyName">
          Company Name
          <hr className="tagLine" />
          {stocks.map((stock, index) => {
            return (
              <div key={stock.symbol}>
                {index !== 0 && <hr />}
                <Link to={`/stocks/${stock.symbol}`}>
                  <div>{stock.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="price">
          Price
          <hr className="tagLine" />
          {stocks.map((stock, index) => {
            return (
              <div key={stock.symbol}>
                {index !== 0 && <hr />}
                <div>{stock.lastPrice}</div>
              </div>
            );
          })}
        </div>
        <div className="change">
          Change
          <hr className="tagLine" />
          {stocks.map((stock, index) => {
            let stockPrice = (stock.lastPrice - stock.open).toFixed(2);
            let percent = (stock.change * 100).toFixed(2);
            return (
              <div key={stock.symbol}>
                {index !== 0 && <hr />}
                <div>
                  <span style={{ color: stock.change > 0 ? "green" : "red" }}>
                    {stock.change > 0 ? "+" : null}
                    {stockPrice} ({stock.change > 0 ? "+" : null}
                    {percent}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
